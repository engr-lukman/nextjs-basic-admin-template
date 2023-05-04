import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import Layout from 'layouts';
import Meta from 'layouts/meta';
import Spinner from 'components/Spinner';
import RouteChangeIndicator from 'components/RouteChangeIndicator';

import 'styles/globals.css';
import 'styles/nprogress.css';

function getDefaultLayout(children: ReactNode): ReactNode {
  return <Layout>{children}</Layout>;
}

function Auth({ children }: any) {
  const isAuthenticated: boolean = true;

  if (isAuthenticated) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className="p-4 h-[75vh] overflow-hidden overflow-y-auto">
      <Meta />
      <Spinner />
    </div>
  );
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const renderAppLayout = () => {
    const children = Component?.pageOptions?.requireAuth ? (
      <Auth>
        <Component {...pageProps} />
      </Auth>
    ) : (
      <Component {...pageProps} />
    );

    const { getLayout = getDefaultLayout } = Component?.pageOptions || {};

    return getLayout(children);
  };

  return (
    <>
      {renderAppLayout()}
      <RouteChangeIndicator />
      <ToastContainer />
    </>
  );
}

export default MyApp;
