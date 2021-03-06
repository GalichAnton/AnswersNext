import React from "react";

import cn from "classnames";

import styles from "./Footer.module.css";
import { FooterProps } from "./FooterProps";

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <h2 className={styles.author}>Created by</h2>
      <a
        className={styles.author}
        href={"https://github.com/GalichAnton/AnswersNext"}
      >
        Anton Galich
      </a>
    </footer>
  );
};

export default Footer;
