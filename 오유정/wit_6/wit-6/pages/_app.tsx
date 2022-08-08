import React from 'react'
import {Hydrate,QueryClient,QueryClientProvider} from '@tanstack/react-query'
import type {AppProps} from 'next/app'
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from "../components/Navbar"
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (    
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle/>
        <Navbar/>
          <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp