import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IAnswers } from "../../interfaces/interfaces";

export interface AnswerComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  answers: IAnswers[];
}
