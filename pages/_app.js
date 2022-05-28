

import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/admin/createEmotionCache";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "../styles/style.css";
import '../styles/globals.scss'
import Helpers from "../src/Helpers";
import AdminTeacher from "../src/Share/AdminTeacher";
import UserAccess from "../src/Share/UserAccess";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  return (

    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>School Managements</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {router.asPath.split('/')[1] === 'admin' ? (
          <AdminTeacher Component={Component} pageProps={pageProps} />
        ) : (
          <UserAccess Component={Component} pageProps={pageProps} />
        )}
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);



