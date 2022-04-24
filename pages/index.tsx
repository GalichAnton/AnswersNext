import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ContentList from "../page-compoents/ContentList/ContentList";
import { IAnswers, ITasks } from "../interfaces/interfaces";
import { Answers, Tasks } from "../data/Answers";

const Home: NextPage<HomePageProps> = ({ answers, tasks }) => {
  return (
    <div>
      <Head>
        <title>Подготовка</title>
        <meta name="description" content="Interview answer aggregator" />
        <meta
          name="keywords"
          content="questions, answers, tasks, js, ts, react"
        />
        <meta
          property="og:image"
          content="https://avatars.mds.yandex.net/i?id=2a0000017a116945f9fc0c138668185665a1-4336923-images-thumbs&n=13"
        />
        <meta property="og:title" content="AnswerComponent" />
        <meta property="og:description" content="Interview answer aggregator" />
      </Head>
      <main>
        <ContentList answers={answers} tasks={tasks} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: { answers: Answers, tasks: Tasks },
  };
};

interface HomePageProps extends Record<string, unknown> {
  answers: IAnswers[];
  tasks: ITasks[];
}
