import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { initializePersistor, initializeStore } from "@/redux";
import { AppThemeProvider, AuthGate, LeftBottomToastComponent } from "@/components";
import { CssBaseline } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { envHandler } from "@/utilities";

export default function App({ Component, pageProps }: AppProps) {
  const store = useMemo(() => {
    return initializeStore(pageProps.internal?.initializeReduxState);
  }, [pageProps.internal?.initializeReduxState]);

  const persistor = useMemo(() => {
    return initializePersistor(store);
  }, [store]);

  const clientId = envHandler.getGoogleId();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppThemeProvider>
          <CssBaseline />
          <AuthGate authSettings={pageProps.authSettings}>
            <GoogleOAuthProvider clientId={clientId || ""}>
              <Component {...pageProps} />
            </GoogleOAuthProvider>
          </AuthGate>
          <LeftBottomToastComponent />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  );
}
