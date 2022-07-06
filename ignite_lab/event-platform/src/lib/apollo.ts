import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl58st1y15f2v01umc68ravsa/master',
    cache: new InMemoryCache()
})