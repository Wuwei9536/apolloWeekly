import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigate from './pages/navigate';

const ApolloCache = new InMemoryCache();
ApolloCache.writeData({ data: { cardDatas: [] } });

const client = new ApolloClient({
  uri: 'http://nav.wwwien.top:3001/graphql',
  cache: ApolloCache,
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Navigate />
  </ApolloProvider>
);

export default App;
