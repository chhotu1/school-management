import * as React from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../src/admin/theme/theme";
import FullLayout from "../../src/admin/layouts/FullLayout";
import Helpers from "../Helpers";
import { CustomLoader } from "./CommonFunction";
const AdminTeacher = (props) => {
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
        if (router.asPath.split('/')[1] === "admin" && role===Helpers.Constant.STUDENT) {
            router.replace("/");
        }
    }
    return (
        <>
        {isLoader?<CustomLoader/>:''}
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <FullLayout>
                <Component {...pageProps} />
            </FullLayout>
        </ThemeProvider>
        </>
    )
}

export default AdminTeacher
