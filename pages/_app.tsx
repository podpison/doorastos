import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '@/components/layout';
import { CookiesProvider } from 'react-cookie';
import reduxStore from '@/redux/store';
import { Provider } from 'react-redux';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = reduxStore.useWrappedStore(rest);

  return <Provider store={store}>
    <CookiesProvider>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </CookiesProvider>
  </Provider>
}

export default App