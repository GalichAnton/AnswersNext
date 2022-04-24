import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IAnswers } from "../../interfaces/interfaces";

export interface ContentListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  answers: IAnswers[];
}
