import '../styles/globals.css';

function Layout({ children }) {
  return <div className='max-w-3xl mx-auto'>{children}</div>;
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
