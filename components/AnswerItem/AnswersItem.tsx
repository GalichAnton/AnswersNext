import React, { FC } from "react";
import classes from "./AnswersItem.module.css";
import Image from "next/image";
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
      <div className={cn(classes.answer, className)} {...props}>
        <h2 className={classes.title}>{answer?.title}</h2>
        <div className={classes.infoBox}>
          <div className={classes.imgBox}>
            <Image
              width={600}
              height={450}
              objectFit={"fill"}
              src={`https://res.cloudinary.com/demo/image/fetch/${answer?.image}`}
              alt="pic"
            />
          </div>
          <iframe
            className={classes.iframeBox}
            allowFullScreen
            frameBorder="0"
            title="Youtube player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src={`https://youtube.com/embed/${answer?.video}?autoplay=0`}
          />
        </div>
        <h3 className={classes.descr}>Краткое описание</h3>
        <p className={classes.descr}>{answer?.descr}</p>
        <ul className={classes.links}>
          Подробнее &gt;
          {answer?.links.map((link) => (
            <a
              className={classes.link}
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
