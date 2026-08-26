import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { routeConfig } from './config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

export const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
