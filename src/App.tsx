import NavItem from "./components/NavItem";
import menuIcon from "./assets/images/icon-menu.svg";
import webMoble from "./assets/images/image-web-3-mobile.jpg";
import webDesktop from "./assets/images/image-web-3-desktop.jpg";
import New from "./components/New";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full font-inter px-3 py-3 sm:px-40 sm:py-24">
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
        <div className="grid grid-cols-1 gap-3">
          <img src={webDesktop} alt="" className="sm:hidden" />
          <img src={webMoble} alt="" className="hidden sm:block" />
          <p className="text-very-dark-blue text-5xl font-bold">
            The Bright Future of Web 3.0?
          </p>
          <div className="flex flex-col gap-5">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-sort-red text-Off-white p-3 tracking-widest w-1/2">
              READ MORE
            </button>
          </div>
          <New />
        </div>
      </div>
    </div>
  );
}

export default App;
