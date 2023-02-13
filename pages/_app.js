import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/Business/Layout/Layout";
import "../styles/globals.scss";
import { APP_NAME, SEO_TAGS } from "../utils/constants";
import { isMobileView } from "../utils/helperMethods";

function MyApp({ Component, pageProps, isMobile }) {
  return (
    <Fragment>
      <Head>
        <title>{pageProps?.title || SEO_TAGS.DEFAULT.TITLE}</title>
        <meta
          name="description"
          content={pageProps?.description || SEO_TAGS.DEFAULT.DESCRIPTION}
        />
        <meta
          name="keywords"
          content={pageProps?.keywords || SEO_TAGS.DEFAULT.KEYWORDS}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://www.thefilmmastery.com/images/tfm_logo.png" />
      </Head>
      <Layout isMobile={isMobile}>
        <Component {...pageProps} isMobile={isMobile} />
      </Layout>
    </Fragment>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  const isMobile = isMobileView(ctx);

  return {
    isMobile,
  };
};

export default MyApp;
