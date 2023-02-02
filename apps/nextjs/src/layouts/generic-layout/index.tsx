import { useEffect } from 'react';
import { useTheme } from 'next-themes';

import { ThemeProvider } from '~/components/ThemeProvider';
import { cn } from '~/utils/utils';

interface GenericLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function ThemeSetter(): null {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [theme, setTheme]);
  return null;
}

export function GenericLayout({
  children,
  className,
}: GenericLayoutProps): JSX.Element {
  return (
    <main
      className={cn(
        'flex h-screen flex-col items-center h-100 data-theme:dark',
        className,
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        enableSystem={false}
        enableColorScheme={false}
      >
        <ThemeSetter />
        {children}
      </ThemeProvider>
    </main>
  );
}
