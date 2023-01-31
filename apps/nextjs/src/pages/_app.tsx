import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }} {...pageProps} >  
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
