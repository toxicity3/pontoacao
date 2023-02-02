import '../styles/globals.css';
import type { AppType } from 'next/app';
import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '~/utils/api';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{ baseTheme: dark }}
      {...pageProps}
    >
      <SessionProvider session={session}>
        <div className="container mx-auto flex items-center justify-center h-screen">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
