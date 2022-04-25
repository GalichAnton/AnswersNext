import React, { FC } from "react";
import { ITask, Category } from "../../interfaces/interfaces";
import styles from "../AnswerItem/AnswersItem.module.css";
interface QuestionItemProps {
  task?: ITask;
}
const TaskItem: FC<QuestionItemProps> = ({ task }) => {
  return (
    <div className={styles.answer}>
      <h2 className={styles.title}>{task?.title}</h2>
      <div className={styles.infoBox}>
        <iframe
          height={400}
          className={styles.iframeBox}
          allowFullScreen
          frameBorder="0"
          title="Youtube player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://youtube.com/embed/${task?.video}?autoplay=0`}
        />
        <iframe
          height={400}
          className={styles.iframeBox}
          scrolling="no"
          title={task?.title}
          src={task?.codepenUrl}
          frameBorder="no"
          loading="lazy"
          allowFullScreen={true}
        />
      </div>
      <h3 className={styles.descr}>Постановка задачи</h3>
      <p className={styles.descr}>{task?.descr}</p>
    </div>
  );
};

export default TaskItem;
