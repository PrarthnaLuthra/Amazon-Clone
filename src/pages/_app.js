import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session = {pageProps.session} basePath="http://localhost:8001/api/auth">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
