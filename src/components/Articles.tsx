import { FunctionComponent } from "react";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import Article from "./Article";

interface ArticlesProps {}

const Articles: FunctionComponent<ArticlesProps> = () => {
  return (
    <>
      <Article
        imgSrc={retro}
        sequence={"01"}
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
      />
      <Article
        imgSrc={laptop}
        sequence={"02"}
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
      />
      <Article
        imgSrc={gaming}
        sequence={"03"}
        title="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
      />
    </>
  );
};

export default Articles;
