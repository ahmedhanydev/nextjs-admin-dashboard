"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

type Props = {
  item: {
    title: string;
    icon: JSX.Element;
    path: string;
  };
};

const MenuLink = ({ item }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      <span className={styles.title}> {item.title}</span>
    </Link>
  );
};

export default MenuLink;
