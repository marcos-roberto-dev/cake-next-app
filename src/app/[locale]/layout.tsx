import { ClientI18nProvider } from "@/components/ClientI18NProvider";
import { CustomHeader } from "@/components/CustomHeader";

export default async function LocaleLayout({
  children,
  params ,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = {
    locale: (await params).locale || "pt-br",
  }

  return (
    <>
    <ClientI18nProvider>
      <CustomHeader params={resolvedParams} />
      {children}

    </ClientI18nProvider>
    </>
  );
}
