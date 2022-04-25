import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IAnswers, ITasks } from "../../interfaces/interfaces";

export interface SideBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  answer?: IAnswers | ITasks;
}
