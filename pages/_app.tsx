import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as amplitude from '@amplitude/analytics-browser';

import Layout from "../layout/Layout";

amplitude.init('2082ab2a4b7ab2b8cdd162f713b2798', {"autocapture":true});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        TEST
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
