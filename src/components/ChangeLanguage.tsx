'use client'

import { useTranslation } from "react-i18next";

interface ChangeLanguageProps {
    locale: string;
    children?: React.ReactNode;
}

export function ChangeLanguage({ locale, children }: ChangeLanguageProps) {
    const { i18n } = useTranslation();
    i18n.changeLanguage(locale);

    return <>{children}</>;
}
