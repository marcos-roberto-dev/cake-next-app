'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdOutlineShoppingCart } from "react-icons/md";

const links = [
  { path: '/', label: 'Shop' },
  { path: '/our-story', label: 'Our Story' },
  { path: '/why-miss-cupcake', label: 'Why Miss Cupcake' }
];

export function CustomHeader({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const pathname = usePathname();

  // Remove o locale do início do pathname
  const cleanPathname = pathname.replace(/^\/[a-z]{2}-[a-z]{2}/i, '') || '/';

  function loadActiveLinkClass(link: { path: string }) {
    // Compara o caminho limpo com o path do link
    return cleanPathname === link.path ? 'font-bold' : '';
  }

  return (
    <header className="bg-red-100 py-4 px-4 md:px-[126px] font-lato text-lg text-purple-800">
      <nav className="flex justify-between max-w-[1360px] mx-auto">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={`/${params.locale}${link.path}`}
                className={loadActiveLinkClass(link)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative cursor-pointer">
          <div className="absolute -top-2 -right-2 bg-purple-950 text-amber-100 rounded-full w-5 h-5 flex items-center justify-center text-xs">1</div>
          <MdOutlineShoppingCart size={40} className="font-light" />
        </div>
      </nav>
    </header>
  );
}