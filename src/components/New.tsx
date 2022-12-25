import { FunctionComponent } from "react";
import NewItem from "./NewItem";

interface NewProps {}

const New: FunctionComponent<NewProps> = () => {
  return (
    <div className="bg-very-dark-blue p-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-soft-orange font-medium text-lg">New</h1>
        <NewItem
          title="Hydrogen VS Electric Cars"
          description="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <hr className="border-grayish-blue" />
        <NewItem
          title="The Downsides of AI Artistry"
          description="What are the possible adverse effects of on-demand AI image generation?"
        />
        <hr className="border-grayish-blue" />
        <NewItem
          title="Is VC Funding Drying Up?"
          description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
    </div>
  );
};

export default New;
