import React from 'react'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from '../components/Layout/Layout';
import {Hydrate,QueryClient,QueryClientProvider} from '@tanstack/react-query'
import type {AppProps} from 'next/app'
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from "../components/Layout/Navbar"
import { useState } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions : {
    	queries : {
          refetchOnWindowFocus : false,
          // refetchOnMount : false,
          // retry : false
        }
    }
  });
  return (    
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle/>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </Hydrate>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  )
}

export default MyApp;