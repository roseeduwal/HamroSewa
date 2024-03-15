import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import { useCallback } from "react";
import { useFetchMeQuery } from "./hooks/useUser";
import ScreenSplash from "./components/splash-loader";

// eslint-disable-next-line react/prop-types
export default function AppLayout({ children }) {
  const { dispatch } = useAuthContext();

  const onSuccess = useCallback(
    (data) => {
      dispatch({ type: "LOGIN", payload: data.data });
    },
    [dispatch]
  );
  const onError = useCallback(() => {
    // navigate("/");
  }, []);
  const { isLoading } = useFetchMeQuery(onSuccess, onError);
  if (isLoading)
    return (
      <div>
        <ScreenSplash />
      </div>
    );
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
