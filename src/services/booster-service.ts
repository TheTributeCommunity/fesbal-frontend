import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getEnvVar } from '../helpers/envVars'
import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'

const getUserToken = (): string => localStorage.getItem('token') || ''

const httpLink = new HttpLink({
  uri: getEnvVar('BACKEND_URL') || 'http://localhost:3000/graphql',
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: getEnvVar('BACKEND_WS') || 'ws://localhost:3000/graphql',
    connectionParams: {
        Authorization: getUserToken(),
    }
  })
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

export const BoosterClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})
