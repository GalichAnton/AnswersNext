import React from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Answers } from "../../../data/Answers";
import { IAnswers } from "../../../interfaces/interfaces";
import AnswerComponent from "../../../page-compoents/AnswerComponent/AnswerComponent";

const AnswerPage: NextPage<AnswerPageProps> = ({ answers }) => {
  return (
    <>
      <AnswerComponent answers={answers} />
    </>
  );
};

export default AnswerPage;

interface AnswerPageProps {
  answers: IAnswers[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const answer of Answers) {
    paths = [
      ...paths,
      ...answer.items.map((a) => `/answers/${answer.name}/${a.id}`),
    ];
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<AnswerPageProps> = async () => {
  const answers = Answers;
  return {
    props: { answers },
    revalidate: 60,
  };
};
