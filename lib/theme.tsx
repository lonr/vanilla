'use client';

import { theme, ThemeProvider as PrimerThemeProvider } from '@primer/react';
import deepmerge from 'deepmerge';

const customTheme = deepmerge(theme, {
  fonts: {
    normal: 'system-ui',
    mono: 'monospace, ui-monospace',
  },
  colorSchemes: {
    // Customize an existing scheme
    light: {
      colors: {
        calendar: {
          doodle: ['#ebedf0', '#0a659e', '#f59a61', '#e51a4c'],
          halloween: ['#ebedf0', '#ffee4a', '#ffc501', '#fe9600', '#03001c'],
        },
      },
    },
    dark: {
      colors: {
        calendar: {
          doodle: ['#161b22', '#0a659e', '#f59a61', '#e51a4c'],
          halloween: ['#161b22', '#ffee4a', '#ffc501', '#fe9600', '#03001c'],
        },
      },
    },
  },
  // not working
  // breakpoints: ['768px', '1012px'],
});

export function ThemeProvider({
  colorMode,
  children,
}: {
  colorMode?: 'light' | 'dark';
  children: React.ReactNode;
}) {
  return (
    <PrimerThemeProvider theme={customTheme} colorMode={colorMode}>
      {children}
    </PrimerThemeProvider>
  );
}
