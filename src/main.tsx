/* eslint-disable prettier/prettier */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@shared/styles/colors.css';
import '@shared/styles/fonts.css';
import '@shared/styles/reset.css';
import '@shared/styles/global.css';


import { AppProvider } from './app/providers';
import { AppRouter } from './app/routing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </StrictMode>,
);
