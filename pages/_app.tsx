import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../src/styles/main.css';

const OhMyParty = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Bg Video Error</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>

      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default OhMyParty;
