import { App } from 'konsta/react';
import '../styles/globals.css';
import Layout  from '../components/layout';
function MyApp({ Component, pageProps }) {
  return (
    // Wrap our app with App component
    <App theme="ios">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </App>
  );
}

export default MyApp;
