import { generalAnswers } from "./Answers/generalAnswers";
import { IAnswers } from "../interfaces/interfaces";
import { jsAnswers } from "./Answers/jsAnswers";
import { tsAnswers } from "./Answers/tsAnswers";
import { reactAnswers } from "./Answers/reactAnswers";
import { gitAnswers } from "./Answers/gitAnswers";
import { jsTasks } from "./Tasks/jsTasks";
import { tsTasks } from "./Tasks/tsTasks";

export const Answers: IAnswers[] = [
  {
    title: "Общие вопросы",
    name: "general",
    items: generalAnswers,
  },
  {
    title: "Java Script",
    name: "js",
    items: jsAnswers,
  },
  {
    title: "Type Script",
    name: "ts",
    items: tsAnswers,
  },
  {
    title: "React/Redux",
    name: "react",
    items: reactAnswers,
  },
  {
    title: "Git",
    name: "git",
    items: gitAnswers,
  },
  {
    title: "JS задачки",
    name: "jstask",
    items: jsTasks,
  },
  {
    title: "TS задачки",
    name: "tstask",
    items: tsTasks,
  },
];
