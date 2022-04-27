import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import arrow from "./arrow.svg";
import close from "./close.svg";
import menu from "./menu.svg";
import up from "./up.svg";
export const icons = {
  up,
  close,
  menu,
  arrow,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
}
