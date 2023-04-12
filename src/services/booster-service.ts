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
}

const getUserToken = (): string => localStorage.getItem('token') || ''

const buildLinks = () => {
    const httpLink = createHttpLink({
        uri: getEnvVar('BACKEND_URL') || 'http://localhost:3000/graphql'
    })

    const subscriptionsClient = new SubscriptionClient(
        getEnvVar('BACKEND_WS') || 'wss://localhost:3000',
        {
            connectionParams: () => {
                return {
                    Authorization: `Bearer ${getUserToken()}`,
                }
            },
        }
    )

    const wsLink = new WebSocketLink(
        subscriptionsClient
    )

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                Authorization: getUserToken() ? `Bearer ${getUserToken()}` : '',
            },
        }
    })

    return split(
        ({ query }) => {
            const definition = getMainDefinition(query)
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            )
        },
        wsLink,
        authLink.concat(httpLink)
    )
}

export const BoosterClient = new ApolloClient({
    link: buildLinks(),
    cache: new InMemoryCache({ addTypename: false }),
    defaultOptions: apolloOptions,
})

BoosterClient.onResetStore(async () => {
    BoosterClient.setLink(buildLinks())
})