import Link from "next/link";
import React from "react";
import { SideListProps } from "./SideListProps";
import styles from "./SideList.module.css";
import cn from "classnames";
const SideList = ({ answer, className, ...props }: SideListProps) => {
  return (
    <div className={cn(className, styles.sideList)} {...props}>
      <h2 className={styles.title}>{answer?.title}</h2>
      <ul className={styles.list}>
        {" "}
        {answer?.items.map((item, i) => (
          <li key={item.id} className={styles.link}>
            <Link
              href={
                answer.name.includes("task")
                  ? `/tasks/${answer.name}/${item.id}`
                  : `/answers/${answer.name}/${item.id}`
              }
            >
              <a>
                {i + 1}. {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideList;
