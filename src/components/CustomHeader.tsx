'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { TextLanguage } from "./TextLanguage";

  const linksDefault = [
    { path: '/',  disabled: false, label: 'General.Links.Shop' },
    { path: '/our-story', label: 'General.Links.OurStory', disabled: true },
    { path: '/why-miss-cupcake', label: 'General.Links.WhyMissCupcake', disabled: true }
  ];

  const languages = [
    { code: 'pt-br', label: 'Português (BR)', flag: '🇧🇷' },
    { code: 'en-us', label: 'English (US)', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

export function CustomHeader({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const pathname = usePathname();
  const [links,setLinks] = useState([...linksDefault]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  // Remove o locale do início do pathname
  const cleanPathname = pathname.replace(/^\/[a-z]{2}-[a-z]{2}/i, '') || '/';

  function loadActiveLinkClass(link: { path: string }) {
    // Compara o caminho limpo com o path do link
    return cleanPathname === link.path ? 'font-bold' : '';
  }

  useEffect(() => {
    setLinks([...linksDefault])
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    }

    if (languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageMenuOpen]);

  return (
    <header className={`bg-red-100 w-full text-purple-800 py-4 px-4 text-center md:text-start sticky top-0 z-50`}
    >
      <nav className="flex justify-between max-w-[1360px] mx-auto items-center">
        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
              <li key={link.path}>
                {link.disabled ? <span className="text-gray-400">   <TextLanguage i18nKey={link.label}></TextLanguage></span> : (
                  <Link
                    href={`/${params.locale}${link.path}`}
                    className={[`hover:underline`, loadActiveLinkClass(link)].join(' ')}
                  >
                    <TextLanguage i18nKey={link.label}></TextLanguage>
                  </Link>
                )}
              </li>
            ))}
        </ul>
        {/* Menu hambúrguer mobile */}
        <button
          className="md:hidden p-2 text-purple-800 cursor-pointer"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={32} />
        </button>

        <div className="flex items-center space-x-4">
          {/* Menu de idioma */}
          <div className="relative" ref={languageMenuRef}>
            <button
              className="p-2 text-purple-800 cursor-pointer hover:bg-purple-200 rounded-full transition-colors"
              aria-label="Alterar idioma"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <FiGlobe size={24} />
            </button>

            {/* Dropdown de idiomas */}
            {languageMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-purple-200 rounded-lg shadow-lg z-50 min-w-[180px]">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={`/${language.code}${cleanPathname}`}
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-purple-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="text-purple-800 text-sm font-medium">{language.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Carrinho */}
          <div className="relative cursor-pointer">
            <div className="absolute -top-2 -right-2 bg-purple-950 text-amber-100 rounded-full w-5 h-5 flex items-center justify-center text-xs">1</div>
            <MdOutlineShoppingCart size={40} className="font-light" />
          </div>
        </div>
      </nav>
      {/* Menu tela cheia */}
      {menuOpen && (
        <div className="fixed inset-0 bg-red-100 z-50 flex flex-col items-center justify-center text-3xl font-bold text-purple-800">
          <button
            className="absolute top-6 right-6 p-2 text-purple-800 cursor-pointer"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <FiX size={40} />
          </button>
          <ul className="space-y-8">
            {links.map((link) => (
              <li key={link.path}>
                {link.disabled ? <span className="text-gray-400">{link.label}</span> : (
                  <Link
                    href={`/${params.locale}${link.path}`}
                    className="hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                       <TextLanguage i18nKey={link.label}></TextLanguage>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
