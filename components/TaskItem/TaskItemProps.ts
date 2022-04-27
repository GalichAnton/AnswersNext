import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IAnswers, ITasks } from "../../interfaces/interfaces";

export interface TaskItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  answer?: IAnswers | ITasks;
}
