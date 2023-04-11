import AppContextProvider from "../components/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      {" "}
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
