import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "500", "400"],
});

interface NavBarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem: React.FC<NavBarItemProps> = ({
  href,
  children,
  isActive,
}) => {
  return <Button>{children}</Button>;
};

const NavbarItems: NavBarItemProps[] = [
  { href: "/", children: "Home", isActive: true },
  { href: "/about", children: "About", isActive: false },
  { href: "/features", children: "Features", isActive: false },
  { href: "/pricing", children: "Pricing", isActive: false },
  { href: "/contact", children: "Contact", isActive: false },
];

export const Navbar = () => {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl, font-semibold", poppins.className)}>
          Funroad
        </span>
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavbarItem key={item.href} href={item.href}>
            {item.children}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};
