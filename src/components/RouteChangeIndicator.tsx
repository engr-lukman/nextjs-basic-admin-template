import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import 'nprogress/nprogress.css';

const RouteChangeIndicator = () => {
  NProgress.configure({ showSpinner: false, speed: 300, trickleSpeed: 100 });
  const router = useRouter();

  useEffect(() => {
    const routeChangeStart = () => NProgress.start();
    const routeChangeFinish = () => NProgress.done();

    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeFinish);
    router.events.on('routeChangeError', routeChangeFinish);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeFinish);
      router.events.off('routeChangeError', routeChangeFinish);
    };
  }, [router.events]);

  return null;
};

export default RouteChangeIndicator;
