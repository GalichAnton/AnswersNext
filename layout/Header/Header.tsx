import React from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import { HeaderProps } from "./HeaderProps";
const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <h2 className={styles.title}>Список вопросов и задач к собеседованию</h2>
    </header>
  );
};

export default Header;
