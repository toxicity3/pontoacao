import '../styles/globals.css';
import type { AppType } from 'next/app';
import Script from 'next/script';
import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Toaster } from 'react-hot-toast';

import { api } from '~/utils/api';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{ baseTheme: dark }}
      {...pageProps}
    >
      <Script
        src="https://cdn.counter.dev/script.js"
        data-id="c364c5f9-523a-49bd-aa09-420f80558467"
        data-utcoffset="-3"
      />
      <Toaster />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
