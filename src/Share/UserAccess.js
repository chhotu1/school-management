import React from 'react';
import { Footer, Header } from "../../src/web-app/components";
import { useRouter } from "next/router";
import Helpers from "../Helpers";
import { CustomLoader } from "./CommonFunction";

const UserAccess = (props) => {
    const { Component, pageProps } = props;
    const router = useRouter();
    const [role, setRole] = React.useState('');
    const [isLoader,setIsLoader] = React.useState(false)

    React.useEffect(() => {
        getUser();
    }, [])
    const getUser=()=>{
        setIsLoader(true)
        Helpers.UserServices.getCurrentUser().then((response) => {
            setIsLoader(false)
            if (response.data.status === true) {
                Helpers.StorageService.setUser(response.data.data);
                setRole(response.data.data.role)
            }
          }).catch((error) => {
            setIsLoader(false)
            console.log(error)
        });
    }

    if (typeof window !== 'undefined') {
        if ((router.asPath.split('/')[1] === "user") && (role===Helpers.Constant.TEACHER || role===Helpers.Constant.ADMIN )) {
            router.replace("/");
        }
    }
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default UserAccess
