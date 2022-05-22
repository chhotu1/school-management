

import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/admin/theme/theme";
import createEmotionCache from "../src/admin/createEmotionCache";
import FullLayout from "../src/admin/layouts/FullLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "../styles/style.css";
import '../styles/globals.scss'
import { Footer, Header } from "../src/web-app/components";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

 function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter()
  return (

      <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <Head>
        <title>School Managements</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {router.asPath.split('/')[1] === 'admin' ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FullLayout>
            <Component {...pageProps} />
          </FullLayout>
        </ThemeProvider>
      ) : (
        <>
        <Header/>
         <Component {...pageProps} />
         <Footer/>
        </>
       
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

