import React, { useEffect, useState } from "react";
import AnswersItem from "../../components/AnswerItem/AnswersItem";
import classes from "./AnswerComponent.module.css";
import { IAnswers } from "../../interfaces/interfaces";
import Link from "next/link";
import { AnswerComponentProps } from "./AnswerComponentProps";
import { useRouter } from "next/router";
const AnswerComponent = ({ answers, ...props }: AnswerComponentProps) => {
  const [currentAnswers, setCurrentAnswers] = useState<IAnswers>();
  const router = useRouter();
  const { category, answerId } = router.query;
  useEffect(() => {
    setCurrentAnswers(answers.find((answer) => answer.name === category));
  }, [router.asPath]);

  return (
    <div className={classes.answers} {...props}>
      <AnswersItem
        answer={currentAnswers?.items.find((answer) => answer.id === answerId)}
      />

      <Link href={"/"}>
        <a className={classes.button}>К списку</a>
      </Link>
    </div>
  );
};

export default AnswerComponent;
