import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IAnswers, ITasks } from "../../interfaces/interfaces";

export interface ContentListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  answers: IAnswers[];
  tasks: ITasks[];
}
