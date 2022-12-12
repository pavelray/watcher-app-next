import Layout from "../components/Business/Layout/Layout";
import "../styles/globals.scss";
import { isMobileView } from "../utils/helperMethods";

function MyApp({ Component, pageProps, isMobile }) {
  return (
    <Layout>
      <Component {...pageProps} isMobile={isMobile}/>
    </Layout>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  const isMobile = isMobileView(ctx);

  return{
    isMobile
  }
};

export default MyApp;
