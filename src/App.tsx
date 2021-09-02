import React, { useState } from 'react';
import { repeat, range } from 'rambda';
import { List, ListItem, Container } from '@material-ui/core';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GameList from './components/GameList';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <GameList />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
