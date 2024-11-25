import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { TokenProvider } from './context/TokenContext';
import loadable from './components/Loadable/Loadable';

const MarketPage = loadable(() => import('./pages/Market'));

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TokenProvider>
        <MarketPage />
        <Toaster />
      </TokenProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
