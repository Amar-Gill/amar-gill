import '../styles/globals.css';

import AppHeader from '../components/AppHeader';

function Layout({ children }) {
  return <div className='max-w-3xl mx-auto'>{children}</div>;
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
