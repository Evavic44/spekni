import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </ThemeProvider>
  );
}
