"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop() as string;
  const isIDPattern = /^[a-f0-9]{24}$/i.test(lastSegment);
  return (
    <div className={styles.container}>
      {!isIDPattern && lastSegment !== undefined && (
        <div className={styles.title}>{lastSegment}</div>
      )}
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
