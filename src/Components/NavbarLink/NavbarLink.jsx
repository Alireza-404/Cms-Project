import { NavLink, useLocation } from "react-router-dom";

const NavbarLink = (props) => {
  const location = useLocation();
  const isActive = props.activePaths.includes(location.pathname);

  return (
    <li className="text-xl">
      <NavLink
        to={props.link}
        className={
          isActive
            ? "text-blue-600 border-b border-blue-400 pb-2"
            : `text-black dark:text-gray-100 hover:text-blue-600 transition duration-200 border-b border-blue-400/0
            hover:border-blue-400 pb-2 dark:hover:text-blue-600`
        }
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
