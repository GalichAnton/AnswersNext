import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "./ContentList.module.css";
import { ContentListProps } from "./ContentListProps";
import { motion } from "framer-motion";
import useOutsideClick from "../../hooks/useOutsideClick";
const ContentList = ({ answers, ...props }: ContentListProps) => {
  const newAnswers = answers.map((answer) => ({ ...answer, isOpen: false }));
  const [currentAnswers, setCurrentAnswers] = useState(newAnswers);
  const ref = useRef<HTMLUListElement | null>(null);
  const handleOpen = (title: string) => {
    setCurrentAnswers(
      currentAnswers.map((answer) =>
        answer.title === title
          ? { ...answer, isOpen: !answer.isOpen }
          : { ...answer, isOpen: false }
      )
    );
  };
  useOutsideClick(ref, () => {
    setCurrentAnswers(
      currentAnswers.map((answer) => ({ ...answer, isOpen: false }))
    );
  });
  const variants = {
    visible: {
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    hidden: { marginBottom: 0, height: 0, padding: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 40,
    },
    hidden: { opacity: 0, height: 0 },
  };
  return (
    <div {...props}>
      <h1 className={styles.mainTitle}>Содержание</h1>
      <ul className={styles.wrapper} ref={ref}>
        {currentAnswers.map((category, i) => (
          <li key={category.title} className={styles.list}>
            <h3
              className={styles.category}
              onClick={() => handleOpen(category.title)}
            >
              {i + 1}. {category.title}
            </h3>

            <motion.ul
              layout
              className={styles.answers}
              variants={variants}
              initial={"closed"}
              animate={category.isOpen ? "visible" : "hidden"}
            >
              {category.items.map((answer, i) => (
                <motion.li
                  key={answer.id}
                  variants={variantsChildren}
                  className={styles.links}
                >
                  <Link
                    href={
                      category.title.includes("задачки")
                        ? `tasks/${category.name}/${answer.id}`
                        : `questions/${category.name}/${answer.id}`
                    }
                  >
                    <a className={styles.item}>
                      {i + 1}. {answer.title}
                    </a>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
