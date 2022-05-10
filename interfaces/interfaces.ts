interface link {
  title: string;
  url: string;
}

export type Category = "general" | "js" | "react" | "ts" | "HTML/CSS" | "git";

export interface IAnswer {
  id: string;
  category: Category;
  title: string;
  descr: string;
  image?: string;
  video?: string;
  links: link[];
}

export interface ITask extends Omit<IAnswer, "links" | "image"> {
  sandboxUrl: string;
}

export interface IAnswers {
  title: string;
  name: string;
  items: IAnswer[];
}
export interface ITasks {
  title: string;
  name: string;
  items: ITask[];
}
