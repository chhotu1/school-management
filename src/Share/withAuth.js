/*
import { useRouter } from "next/router";
import { useEffect } from "react";
import Helper from "../cors/helper";
const withAuth = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter();
            const accessToken =Helper.StorageService.getAccessToken();
            if (!accessToken) {
                Router.replace("/");
                setTimeout(() => {
                    document.getElementsByClassName("signIn-text")[0].click();
                }, 1500);
                return null;
            }else{
             
             
            }
            // If this is an accessToken we just render the component that was passed with all its props
            return <WrappedComponent {...props} />;
        }
        return null;
    };
};

export default withAuth;

*/

//We need to verify the token.
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Helpers from "../Helpers";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(async () => {
      const accessToken = Helpers.StorageService.getAccessToken();
      if (!accessToken) {
        Router.replace("/");
        setTimeout(() => {
          document.getElementsByClassName("signIn-text")[0].click();
        }, 1500);
      } else {
        getUser();
        setVerified(true);
      }
    }, []);

    const getUser = () => {
      
    };

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
