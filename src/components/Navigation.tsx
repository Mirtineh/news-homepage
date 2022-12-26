import { FunctionComponent } from "react";
import NavItem from "./NavItem";
import DropDown from "./DropDown";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  const menuItems = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-very-dark-blue text-7xl font-bold italic">W.</h1>
      <DropDown menuItems={menuItems} />
      <div className="sm:flex justify-between gap-4 hidden">
        {menuItems.map((menuItem) => (
          <NavItem name={menuItem} key={menuItem} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
