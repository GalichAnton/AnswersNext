import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IAnswer } from "../../interfaces/interfaces";

export interface AnswerItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  answer?: IAnswer;
}
