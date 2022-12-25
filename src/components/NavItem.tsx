import { FunctionComponent } from "react";

interface NavItemProps {
  name: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ name }) => {
  return (
    <p className="text-dark-grayish-blue hover:text-sort-red hover:cursor-pointer">
      {name}
    </p>
  );
};

export default NavItem;
