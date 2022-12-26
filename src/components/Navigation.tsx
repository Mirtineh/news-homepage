import { FunctionComponent } from "react";
import NavItem from "./NavItem";
import menuIcon from "../assets/images/icon-menu.svg";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  return (
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
  );
};

export default Navigation;
