import NavbarLink from "../NavbarLink/NavbarLink";

const Navbar = () => {
  return (
    <ul className="flex gap-x-16">
      <NavbarLink link="/users" activePaths={["/", "/users"]}>
        <i className="bi bi-people mr-2"></i>Users
      </NavbarLink>

      <NavbarLink link="/infos" activePaths={["/infos"]}>
        <i className="bi bi-pencil mr-2"></i>Information
      </NavbarLink>

      <NavbarLink link="/products" activePaths={["/products"]}>
        <i className="bi bi-mortarboard mr-2"></i>Products
      </NavbarLink>

      <NavbarLink link="/articles" activePaths={["/articles"]}>
        <i className="bi bi-journal mr-2"></i>Articles
      </NavbarLink>
    </ul>
  );
};

export default Navbar;
