import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
  })
})

client.query({
  query: gql`
    {
      rates(currency: "CNY") {
        currency
      }
    }
  `
}).then(result => console.log(result));
export default client;