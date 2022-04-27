import React from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import { LayoutProps } from "./LayoutProps";
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
