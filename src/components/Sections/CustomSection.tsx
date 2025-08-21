import colors from "tailwindcss/colors";
interface CustomSectionProps {
  bg?: string,
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export function CustomSection({ bg = colors.white, style, children, className, ref }: CustomSectionProps){
  return <>
    <section
      className={`w-full text-purple-800 relative py-8 px-4 text-center md:text-start md:py-[80px] md:px-[126px]`}
      style={{ backgroundColor: bg, ...style }}

    >
      {children && (
        <div className={`w-full max-w-[1360px] mx-auto ${className}`} ref={ref}>
          {children}
        </div>
      )}
    </section>
  </>
}