import NavItem from "./components/NavItem";
import menuIcon from "./assets/images/icon-menu.svg";

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
      </div>
    </div>
  );
}

export default App;
