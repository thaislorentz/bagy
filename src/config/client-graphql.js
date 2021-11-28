import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://staging-dot-bagy-api.appspot.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9yZUlkIjoxMDYsInJvbGUiOjEsImV4cCI6MTYwMDg4MjIwNn0.jK9P0-Rf5hEfGtJ3bMhXQ2rSNRgmdYGK7yb-QAnJiNU'
  return {
    headers: {
      ...headers,
      'x-auth-token': token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})