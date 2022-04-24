import React, { useEffect, useState } from "react";
import { ITasks } from "../../interfaces/interfaces";
import classes from "../AnswerComponent/AnswerComponent.module.css";
import TaskItem from "../../components/TaskItem/TaskItem";
import { useRouter } from "next/router";
import { TasksComponentProps } from "./TasksComponentProps";
import Link from "next/link";
const TasksComponent = ({ tasks }: TasksComponentProps) => {
  const [currentTasks, setCurrentTasks] = useState<ITasks>();
  const router = useRouter();
  const { category, taskId } = router.query;
  useEffect(() => {
    setCurrentTasks(tasks.find((task) => task.name === category));
  }, [router.asPath]);

  return (
    <div className={classes.answers}>
      <TaskItem task={currentTasks?.items.find((task) => task.id === taskId)} />
      <Link href={"/"}>
        <a className={classes.button}>К списку</a>
      </Link>
    </div>
  );
};

export default TasksComponent;
