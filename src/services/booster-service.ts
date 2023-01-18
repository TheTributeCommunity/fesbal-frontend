import { ApolloClient, createHttpLink, DefaultOptions, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getEnvVar } from '../helpers/envVars'

const apolloOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const userToken = localStorage.getItem('token') || ''

const httpLink = createHttpLink({
  uri: getEnvVar('BACKEND_URL') || 'http://localhost:3000/graphql'
})

const wsLink = new WebSocketLink(
  new SubscriptionClient(
    getEnvVar('BACKEND_WS') || 'wss://localhost:3000',
    {
      connectionParams: () => {
        return {
          Authorization: `Bearer ${userToken}`,
        };
      },
    }
  )
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = userToken
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

export const BoosterClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({ addTypename: false }),
  defaultOptions: apolloOptions,
});
