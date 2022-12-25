import { FunctionComponent } from "react";

interface NewItemProps {
  title: string;
  description: string;
}

const NewItem: FunctionComponent<NewItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-Off-white font-bold">{title}</p>
      <p className="text-grayish-blue">{description}</p>
    </div>
  );
};

export default NewItem;
