import React from "react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { ITasks } from "../../../interfaces/interfaces";
import { ParsedUrlQuery } from "querystring";
import { Tasks } from "../../../data/Answers";
import TasksComponent from "../../../page-compoents/TasksComponent/TasksComponent";

const TaskPage: NextPage<TasksPageProps> = ({ tasks }) => {
  return (
    <>
      <TasksComponent tasks={tasks} />
    </>
  );
};

export default TaskPage;

interface TasksPageProps {
  tasks: ITasks[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const task of Tasks) {
    paths = [...paths, ...task.items.map((t) => `/tasks/${task.name}/${t.id}`)];
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TasksPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  return {
    props: { tasks: Tasks },
    revalidate: 60,
  };
};
