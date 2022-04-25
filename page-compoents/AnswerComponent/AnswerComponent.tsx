import React, { useEffect, useState } from "react";
import AnswersItem from "../../components/AnswerItem/AnswersItem";
import styles from "./AnswerComponent.module.css";
import { IAnswers } from "../../interfaces/interfaces";
import { AnswerComponentProps } from "./AnswerComponentProps";
import { useRouter } from "next/router";
import SideBar from "../../components/SideBar/SideBar";
const AnswerComponent = ({ answers, ...props }: AnswerComponentProps) => {
  const [currentAnswer, setCurrentAnswer] = useState<IAnswers>();
  const router = useRouter();
  const { category, answerId } = router.query;
  useEffect(() => {
    setCurrentAnswer(answers.find((answer) => answer.name === category));
  }, [router.asPath]);

  return (
    <div className={styles.answers} {...props}>
      <SideBar answer={currentAnswer} className={styles.sideBar} />
      <AnswersItem
        className={styles.answer}
        answer={currentAnswer?.items.find((answer) => answer.id === answerId)}
      />
    </div>
  );
};

export default AnswerComponent;
