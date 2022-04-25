import React, { useEffect, useState } from "react";
import { SideBarProps } from "./SideBarProps";
import styles from "./SideBar.module.css";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import SideList from "../SideList/SideList";
import { useWindowSize } from "../../hooks/useWindowSize";
const SideBar = ({ answer, className }: SideBarProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const { width } = useWindowSize();
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
