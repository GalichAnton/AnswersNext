import React, { useEffect, useState } from "react";
import { ITasks } from "../../interfaces/interfaces";
import classes from "../AnswerComponent/AnswerComponent.module.css";
import TaskItem from "../../components/TaskItem/TaskItem";
import { useRouter } from "next/router";
import { TasksComponentProps } from "./TasksComponentProps";
import styles from "../AnswerComponent/AnswerComponent.module.css";
import SideBar from "../../components/SideBar/SideBar";
const TasksComponent = ({ tasks }: TasksComponentProps) => {
  const [currentTask, setCurrentTask] = useState<ITasks>();
  const router = useRouter();
  const { category, taskId } = router.query;
  useEffect(() => {
    setCurrentTask(tasks.find((task) => task.name === category));
  }, [router.asPath]);

  return (
    <div className={classes.answers}>
      <SideBar answer={currentTask} className={styles.sideBar} />
      <TaskItem task={currentTask?.items.find((task) => task.id === taskId)} />
    </div>
  );
};

export default TasksComponent;
