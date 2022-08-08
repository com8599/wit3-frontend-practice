import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../components/layout';
import React from "react";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default MyApp
