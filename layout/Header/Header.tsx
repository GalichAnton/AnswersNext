import React from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import { HeaderProps } from "./HeaderProps";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = ({ className, ...props }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href={"/"}>
        <a className={styles.link}>На главную</a>
      </Link>
      <span className={styles.link} onClick={() => router.back()}>
        Назад
      </span>
    </header>
  );
};

export default Header;
