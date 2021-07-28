
import React from 'react';

import '../styles/globals.css'
import '../styles/antd.less'

import MainLayout from '../components/Layout/MainLayout.jsx';

function MyApp({ Component, pageProps }) {
	const [awaitLoading, setAwaitLoading] = React.useState(true);
  const Layout = Component.Layout || MainLayout;
  // const router = useRouter();

// https://github.com/tientran0019/boilerplate-nextjs-antd-less/blob/831a1fb231edf02693e39d3523f35bebb982c2c7/src/pages/_app.js

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
