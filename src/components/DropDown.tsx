import { FunctionComponent, useState } from "react";
import menuIcon from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";

interface DropDownProps {
  menuItems: string[];
}

const DropDown: FunctionComponent<DropDownProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden">
      {isOpen ? (
        <>
          <button
            className="fixed inset-0 bg-dark-grayish-blue bg-opacity-50 cursor-default"
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
          ></button>
          <div className="fixed right-0 top-0 bg-Off-white w-8/12 h-screen">
            <div className="mx-5 my-8">
              <div className="flex justify-end">
                <img src={menuClose} alt="" onClick={() => setIsOpen(false)} />
              </div>
              <div className="flex flex-col mt-20 gap-6">
                {menuItems.map((menuItem) => (
                  <p key={menuItem} className="text-lg text-very-dark-blue">
                    {menuItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <img
          src={menuIcon}
          alt=""
          className="sm:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  );
};

export default DropDown;
