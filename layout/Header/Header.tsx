import React from "react";

import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";
import { HeaderProps } from "./HeaderProps";

const Header = ({ className, ...props }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href={"/"}>
        <a className={styles.link}>На главную</a>
      </Link>
      <h2 className={styles.title}>
        Список вопросов к{" "}
        <span className={styles.interview}>собеседованию</span>{" "}
      </h2>
    </header>
  );
};

export default Header;
