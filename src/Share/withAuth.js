import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Helpers from "../Helpers";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(async () => {
      const accessToken = await Helpers.StorageService.getAccessToken();
      if (!accessToken) {
        Router.replace("/login");
      } else {
        setVerified(true);
      //   try {
      //     const decoded = jwt.verify(JSON.parse(accessToken), process.env.TOKEN_SECRET);
      //     setVerified(true);
      //  } catch(err) {
      //    console.log(err)

      //     // Router.replace("/login");
      //     // localStorage.clear();
      //     // setVerified(false);
      //  }
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
