import React from "react";

import cn from "classnames";

import styles from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIconProps";

export const ButtonIcon = ({
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button className={cn(styles.button, className)} {...props}>
      <IconComp />
    </button>
  );
};
