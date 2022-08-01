import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../components/layout';
import from { QueryClient, QueryClientProvider} 'react-query';
const QueryClient = new QueryClientProvider();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QueryClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default MyApp
