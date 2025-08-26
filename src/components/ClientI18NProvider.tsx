'use client';

import { I18nextProvider } from "react-i18next";
import i18nInstance from "@/i18n";

interface ClientI18nProviderProps {
  children: React.ReactNode;
}

export function ClientI18nProvider({ children }: ClientI18nProviderProps) {  
    return (
    <I18nextProvider i18n={i18nInstance} defaultNS={'translation'}>
      {children}
    </I18nextProvider>
  );
}