'use client'

import { Trans, useTranslation } from "react-i18next";

interface TextLanguageProps {
  i18nKey: string,
  tag?: React.ElementType<any>
  className?: string
}

export function TextLanguage({ i18nKey, tag, className }: TextLanguageProps) {
 const { ready } = useTranslation()
 if(!ready) return null;
  if(tag) {
    const Tag = tag;
    return (
      <Tag className={className}>
        <Trans i18nKey={i18nKey} />
      </Tag>
    );
  }

  return <Trans i18nKey={i18nKey} />;
}
