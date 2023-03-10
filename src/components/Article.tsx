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
    <div className="flex items-center gap-3 sm:mt-5">
      <img src={imgSrc} alt="" className="max-w-28 h-32" />
      <div className="flex flex-col justify-between gap-3">
        <p className="text-dark-grayish-blue text-2xl">{sequence}</p>
        <p className="text-very-dark-blue font-medium hover:text-sort-red hover:cursor-pointer text-lg">
          {title}
        </p>
        <p className=" text-dark-grayish-blue">{description}</p>
      </div>
    </div>
  );
};

export default Article;
