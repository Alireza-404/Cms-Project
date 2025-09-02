import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  const [isDark, setIsDark] = useState(null);
  const root = window.document.documentElement;

  useEffect(() => {
    const getIsDark = JSON.parse(localStorage.getItem("CmsTheme")) || false;
    setIsDark(getIsDark);

    if (getIsDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const changeThemeHandler = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("CmsTheme", JSON.stringify(newTheme));

    if (newTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <div className="container mx-auto mt-16">
      <div className="shadow-xl px-10 py-5 bg-white dark:bg-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <img
            alt="Profile"
            src="./src/assets/img/admin/profile/banana.png"
            className="border-2 border-gray-500 dark:border-gray-300 w-24 h-20 object-cover"
          />
          <div>
            <p className="dark:text-gray-100 text-2xl font-semibold">
              Alireza Shabani
            </p>
            <p className="dark:text-gray-200 text-black/80 text-xl">
              Web Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            type="button"
            className="bg-yellow-400 text-2xl"
            click={changeThemeHandler}
          >
            <i className="bi bi-sun dark:block hidden"></i>
            <i className="bi bi-moon dark:hidden block"></i>
          </Button>

          <Button type="button" className="bg-gray-500 text-2xl">
            <i className="bi bi-bell"></i>
          </Button>

          <Button type="button" className="bg-blue-500 text-2xl">
            <span>
              <i className="bi bi-box-arrow-in-left mr-1"></i>
            </span>
            Exit Panel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
