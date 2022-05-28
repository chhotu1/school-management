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
        Router.replace("/login");
      } else {
        
        setVerified(true);
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
