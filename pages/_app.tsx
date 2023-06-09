import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '@/ui/layout';
import { CookiesProvider } from 'react-cookie';
import Head from 'next/head'

const App: FC<AppProps> = ({ Component, pageProps }) => {

  return <CookiesProvider>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
        <link rel="apple-touch-icon" sizes="180x180" href="./../public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./../favicon-16x16.png" />
        <link rel="manifest" href="./../site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </CookiesProvider>
}

export default App