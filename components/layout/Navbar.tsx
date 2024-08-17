"use client";

import useScroll from "@/hooks/useScroll";
import { navlinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function Navbar() {
  const scolled = useScroll(30);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed z-50 w-full transition-all",
        scolled
          ? "border-b border-muted-foreground/30 bg-background/60 backdrop-blur-xl"
          : "bg-background/0",
      )}
    >
      <div className="container flex h-16 items-center justify-center">
        {/* logo */}
        <Link href={"/"} className="flex-1">
          <Image src={Logo} width={100} alt={"logo"} placeholder="blur" />
        </Link>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            {/* hamburger */}
            <div className="group flex size-10 items-center justify-center rounded-full bg-foreground/0 transition hover:bg-foreground/20">
              <div className="space-y-1">
                <div className="h-0.5 w-4 rounded-full bg-foreground" />
                <div className="h-0.5 w-3 rounded-full bg-foreground" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="z-[100] border-none bg-transparent">
            <div className="group flex flex-col items-center justify-center transition">
              {navlinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={cn(
                    "font-fontbold text-4xl transition hover:text-secondary",
                    pathname === link.href ? "text-primary" : "text-muted",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
