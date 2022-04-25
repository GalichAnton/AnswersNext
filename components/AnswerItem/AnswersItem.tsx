import React, { useState } from "react";
import styles from "./AnswersItem.module.css";
import Head from "next/head";
import { AnswerItemProps } from "./AnswerItemProps";
import cn from "classnames";
const AnswersItem = ({ answer, className, ...props }: AnswerItemProps) => {
  return (
    <>
      <Head>
        <title>{answer?.title}</title>
        <meta name="description" content={answer?.descr} />
        <meta property="og:title" content={answer?.title} />
        <meta property="og:description" content={answer?.descr} />
        <meta property="og:type" content="article" />
      </Head>
      <div className={cn(styles.answer, className)} {...props}>
        <h2 className={styles.title}>{answer?.title}</h2>
        <div className={styles.infoBox}>
          <div className={styles.imgBox}>
            <img src={answer?.image} alt="pic" />
          </div>
          <iframe
            className={styles.iframeBox}
            allowFullScreen
            frameBorder="0"
            title="Youtube player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src={`https://youtube.com/embed/${answer?.video}?autoplay=0`}
          />
        </div>
        <h3 className={styles.descr}>Краткое описание</h3>
        <p className={styles.descr}>{answer?.descr}</p>
        <ul className={styles.links}>
          Подробнее &gt;
          {answer?.links.map((link) => (
            <a
              className={styles.link}
              key={link.url}
              href={link.url}
              target={"_blank"}
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AnswersItem;
