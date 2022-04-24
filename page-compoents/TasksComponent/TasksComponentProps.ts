import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITasks } from "../../interfaces/interfaces";

export interface TasksComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tasks: ITasks[];
}
