import { FunctionComponent } from "react";

interface ArticleProps {
  imgSrc: string;
  sequence: string;
  title: string;
  description: string;
}

const Article: FunctionComponent<ArticleProps> = ({
  imgSrc,
  sequence,
  title,
  description,
}) => {
  return (
    <div className="flex gap-3">
      <img src={imgSrc} alt="" className="w-28 h-32" />
      <div className="flex flex-col justify-between gap-3">
        <p className="text-dark-grayish-blue text-2xl">{sequence}</p>
        <p className="text-very-dark-blue font-medium">{title}</p>
        <p className=" text-dark-grayish-blue">{description}</p>
      </div>
    </div>
  );
};

export default Article;
