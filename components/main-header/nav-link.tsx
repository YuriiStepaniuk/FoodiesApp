"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<INavLinkProps> = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
