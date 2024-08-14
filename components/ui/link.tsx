import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  as?: LinkProps["as"];
  children: React.ReactNode;
  className?: string;
  ziczac?: boolean;
  isActive?: boolean;
}

export default function CustomLink({
  href,
  as,
  children,
  className = "",
  isActive = false,
  ziczac = false,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      as={as}
      passHref
      className={cn(
        "font-fontbold group relative text-primary transition duration-75 hover:text-secondary",
        isActive && "text-secondary",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute left-0 right-0 top-1/2 -z-10 h-8 origin-left -translate-y-1/2 scale-x-0 bg-[length:100%_100%] bg-center bg-no-repeat transition duration-75 group-hover:scale-x-100",
          ziczac ? "bg-[url('/brush2.png')]" : "bg-[url('/brush1.png')]",
          isActive && "scale-x-100",
        )}
      />
      {children}
    </Link>
  );
}
