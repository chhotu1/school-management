import React from 'react';
import { Footer, Header } from "../../src/web-app/components";
const UserAccess = (props) => {
    const { Component, pageProps } = props;
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default UserAccess
