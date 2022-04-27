import React from "react";

import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./SideList.module.css";
import { SideListProps } from "./SideListProps";

const SideList = ({ answer, className, ...props }: SideListProps) => {
  const router = useRouter();
  return (
    <div className={cn(className, styles.sideList)} {...props}>
      <h2 className={styles.title}>{answer?.title}</h2>
      <ul className={styles.list}>
        {answer?.items.map((item, i) => (
          <li
            key={item.id}
            className={cn(styles.link, {
              [styles.activeLink]:
                router.asPath === `/answers/${answer.name}/${item.id}` ||
                router.asPath === `/tasks/${answer.name}/${item.id}`,
            })}
          >
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
