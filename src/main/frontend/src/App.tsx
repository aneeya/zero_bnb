import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Router from './router/Router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router/>
    </QueryClientProvider>
  );
}
  

export default App
