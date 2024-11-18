"use-client";
import { NavbarMenu } from "../"
import { FaDumbbell } from "react-icons/fa";
// import { MdMenu } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
export const Navbar2 = () => {
  return (
    <>
      <nav>
        <div className="container">
          {/* Logo Section */}
          <div
            className="text-2xl flex
             items-center 
             gap-1
            font-bold
            uppercase
              py-8"
          >
            <FaDumbbell />
            <p>Seynation</p>
            <p className="text-primaryOne">Digital</p>
          </div>
          {/* Menu Section */}
          <div>
            <ul>
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          {/* Button Section */}
          {/* Mobile Hamburger Menu Section */}
        </div>
      </nav>
      {/* Mobile Sidebar Section  */}
    </>
  );
};
