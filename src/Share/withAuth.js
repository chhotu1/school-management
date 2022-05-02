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
import Helper from "../cors/helper";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(async () => {
      const accessToken = Helper.StorageService.getAccessToken();
      if (!accessToken) {
        Router.replace("/");
        setTimeout(() => {
          document.getElementsByClassName("signIn-text")[0].click();
        }, 1500);
      } else {
        getUser();
      }
    }, []);

    const getUser = () => {
      Helper.UserApi.currentUser()
        .then((response) => {
          setVerified(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response) {
            if (error.response.data.message === "invalid or expired jwt") {
              setVerified(false);
              localStorage.clear();
              Router.replace("/");
              setTimeout(() => {
                document.getElementsByClassName("signIn-text")[0].click();
              }, 1000);
            }
          }
        });
    };

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
