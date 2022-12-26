import { FunctionComponent } from "react";
import webMoble from "../assets/images/image-web-3-mobile.jpg";
import webDesktop from "../assets/images/image-web-3-desktop.jpg";

interface ContentProps {}

const Content: FunctionComponent<ContentProps> = () => {
  return (
    <>
      <img
        src={webDesktop}
        alt=""
        className="hidden sm:block sm:col-span-2 w-full h-full object-cover"
      />
      <img src={webMoble} alt="" className="sm:hidden" />
      <p className="text-very-dark-blue text-6xl font-bold sm:row-start-2 self">
        The Bright Future of Web 3.0?
      </p>
      <div className="flex flex-col gap-5 sm:row-start-2">
        <p className="text-dark-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-sort-red text-Off-white p-3 tracking-widest w-1/2 hover:text-Off-white hover:bg-very-dark-blue">
          READ MORE
        </button>
      </div>
    </>
  );
};

export default Content;
