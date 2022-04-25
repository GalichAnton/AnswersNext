import React, { useEffect, useState } from "react";
import { ITasks } from "../../interfaces/interfaces";
import classes from "../AnswerComponent/AnswerComponent.module.css";
import TaskItem from "../../components/TaskItem/TaskItem";
import { useRouter } from "next/router";
import { TasksComponentProps } from "./TasksComponentProps";
import Link from "next/link";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import styles from "../AnswerComponent/AnswerComponent.module.css";
import { motion } from "framer-motion";
import SideList from "../../components/SideList/SideList";
import { useWindowSize } from "../../hooks/useWindowSize";
const TasksComponent = ({ tasks }: TasksComponentProps) => {
  const [currentTask, setCurrentTask] = useState<ITasks>();
  const router = useRouter();
  const { category, taskId } = router.query;
  useEffect(() => {
    setCurrentTask(tasks.find((task) => task.name === category));
  }, [router.asPath]);
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 1024) {
      setIsOpened(false);
    } else setIsOpened(true);
  }, [width]);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <div className={classes.answers}>
      <ButtonIcon
        className={styles.arrow}
        icon="arrow"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <SideList answer={currentTask} className={styles.sideBar} />
        <ButtonIcon
          className={styles.menuClose}
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
      <TaskItem task={currentTask?.items.find((task) => task.id === taskId)} />
    </div>
  );
};

export default TasksComponent;
