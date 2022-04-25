import React from "react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { IAnswers } from "../../../interfaces/interfaces";
import AnswerComponent from "../../../page-compoents/AnswerComponent/AnswerComponent";
import { ParsedUrlQuery } from "querystring";
import { Answers } from "../../../data/Answers";

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

export const getStaticProps: GetStaticProps<AnswerPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const answers = Answers;
  return {
    props: { answers },
    revalidate: 60,
  };
};
