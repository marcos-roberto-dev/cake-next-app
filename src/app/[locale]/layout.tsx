import { CustomHeader } from "@/components/CustomHeader";

export default async function LocaleLayout({children,params}:Readonly<{

  children: React.ReactNode;
  params: { locale: string;}  // This is used to pass the locale to the CustomHeader component
}>){

  const resolvedParams = await params;
  return <>
     <CustomHeader params={resolvedParams}></CustomHeader>
  {children}</>
}