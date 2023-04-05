import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/Business/Layout/Layout";
import "../styles/globals.scss";
import { APP_NAME, SEO_TAGS, SITE_NAME } from "../utils/constants";
import { isMobileView } from "../utils/helperMethods";
import ErrorBoundary from "../components/Business/ErrorBoundary/ErrorBoundary";

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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={APP_NAME} />
        <meta name="twitter:creator" content="Pavel Ray" />
        <meta property="og:url" content={SITE_NAME} />
        <meta
          property="og:title"
          content={pageProps?.title || SEO_TAGS.DEFAULT.TITLE}
        />
        <meta
          property="og:description"
          content={pageProps?.description || SEO_TAGS.DEFAULT.DESCRIPTION}
        />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/images/tfm_logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          id="google-ads"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4497828949688741"
          crossOrigin="anonymous"
        />
      </Head>
      <ErrorBoundary>
        <Layout isMobile={isMobile}>
          <Component {...pageProps} isMobile={isMobile} />
        </Layout>
      </ErrorBoundary>
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
