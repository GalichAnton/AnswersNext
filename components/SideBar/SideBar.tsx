import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { useWindowSize } from "../../hooks/useWindowSize";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import SideList from "../SideList/SideList";
import styles from "./SideBar.module.css";
import { SideBarProps } from "./SideBarProps";
const SideBar = ({ answer, className }: SideBarProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const { width } = useWindowSize();
  const router = useRouter();
  useEffect(() => {
    if (width < 1120) {
      setIsOpened(false);
    }
  }, [router]);
  useEffect(() => {
    if (width < 1120) {
      setIsOpened(false);
    } else setIsOpened(true);
  }, [width]);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <>
      <ButtonIcon
        className={styles.arrow}
        icon="arrow"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <SideList answer={answer} className={className} />
        <ButtonIcon
          className={styles.menuClose}
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </>
  );
};

export default SideBar;
