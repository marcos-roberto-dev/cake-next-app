import { CustomHeader } from "@/components/CustomHeader";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  return (
    <>
      <CustomHeader params={resolvedParams} />
      {children}
    </>
  );
}
