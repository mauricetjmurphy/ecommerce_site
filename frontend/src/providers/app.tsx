import * as React from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { store } from "../stores/store";
import { ScrollToTop } from "../lib";

const queryClient = new QueryClient();

const handleRefreshClick = async () => {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });

  caches.keys().then((keyList) => {
    return Promise.all(
      keyList.map((key) => {
        return caches.delete(key);
      })
    );
  });

  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

const ErrorFallback = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h1 className="text-[24px] font-bold">Please bear with us..</h1>
      <p>
        Sorry for the inconvenience. We suggest you <b>refresh the page</b> to
        resolve the issue.
      </p>
      <button
        className="mt-4 py-2 px-4 bg-red-600 border text-white border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none"
        onClick={handleRefreshClick}
      >
        Refresh
      </button>
    </div>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: `"WorkSans", "Helvetica", "Arial", sans-serif`,
  },
});

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              {process.env.REACT_APP_ENV === "dev" && <ReactQueryDevtools />}
              <Router>
                <ScrollToTop />
                {children}
              </Router>
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};
