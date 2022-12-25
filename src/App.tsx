import NavItem from "./components/NavItem";
import menuIcon from "./assets/images/icon-menu.svg";
import webMoble from "./assets/images/image-web-3-mobile.jpg";
import webDesktop from "./assets/images/image-web-3-desktop.jpg";
import retro from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";
import New from "./components/New";
import Article from "./components/Article";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screenh-screen w-full font-inter px-3 py-3 sm:px-80 sm:py-24">
      <div className="w-full h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-very-dark-blue text-7xl font-bold italic">W.</h1>
          <img src={menuIcon} alt="" className="sm:hidden" />
          <div className="sm:flex justify-between gap-4 hidden">
            <NavItem name="Home" />
            <NavItem name="New" />
            <NavItem name="Popular" />
            <NavItem name="Trending" />
            <NavItem name="Categories" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-x-6 sm:gap-y-10 mt-6">
          <img
            src={webDesktop}
            alt=""
            className="hidden sm:block sm:col-span-2"
          />
          <img src={webMoble} alt="" className="sm:hidden" />
          <p className="text-very-dark-blue text-5xl font-bold sm:row-start-2 self">
            The Bright Future of Web 3.0?
          </p>
          <div className="flex flex-col gap-5 sm:row-start-2">
            <p className="text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-sort-red text-Off-white p-3 tracking-widest w-1/2 hover:text-Off-white hover:bg-very-dark-blue">
              READ MORE
            </button>
          </div>
          <New />
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
        </div>
      </div>
    </div>
  );
}

export default App;
