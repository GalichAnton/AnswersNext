import React, { useEffect, useState } from "react";
import AnswersItem from "../../components/AnswerItem/AnswersItem";
import styles from "./AnswerComponent.module.css";
import { IAnswers } from "../../interfaces/interfaces";
import { AnswerComponentProps } from "./AnswerComponentProps";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import SideList from "../../components/SideList/SideList";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { useWindowSize } from "../../hooks/useWindowSize";
const AnswerComponent = ({ answers, ...props }: AnswerComponentProps) => {
  const [currentAnswer, setCurrentAnswer] = useState<IAnswers>();
  const router = useRouter();
  const { category, answerId } = router.query;
  useEffect(() => {
    setCurrentAnswer(answers.find((answer) => answer.name === category));
  }, [router.asPath]);
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 1024) {
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
    <div className={styles.answers} {...props}>
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
        <SideList answer={currentAnswer} className={styles.sideBar} />
        <ButtonIcon
          className={styles.menuClose}
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>

      <AnswersItem
        className={styles.answer}
        answer={currentAnswer?.items.find((answer) => answer.id === answerId)}
      />
    </div>
  );
};

export default AnswerComponent;
