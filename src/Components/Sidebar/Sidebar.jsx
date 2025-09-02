import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { GetProductsFromServer } from "../../Redux/Slices/ProductsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArray);

  useEffect(() => {
    dispatch(GetProductsFromServer("https://dummyjson.com/products"));
  }, []);

  return (
    <div className="w-96 bg-white dark:bg-gray-700 shadow-2xl mt-16">
      <div className="relative">
        <img
          alt="Banner-Image"
          src="./src/assets/img/admin/banner/banner.png"
          className="h-48 w-full object-cover z-10"
        />
        <img
          alt="Banner-Image"
          src="./src/assets/img/admin/profile/banana.png"
          className="h-32 w-32 object-cover z-20 border-8 border-gray-500 dark:border-white absolute top-1/2
            left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="py-12 px-6 mt-2 flex flex-col gap-y-14">
        <div>
          <p className="text-2xl dark:text-gray-100 text-center font-semibold font-mono">
            Alireza Shabani
          </p>
          <p className="text-xl dark:text-gray-100 text-center">
            Web Developer
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <i className="bi bi-textarea-t dark:text-gray-100 text-xl"></i>
              <p className="text-lg font-medium text-blue-600">First Name</p>
            </div>
            <p className="text-lg font-medium dark:text-gray-100">Alireza</p>
          </div>

          <span className="h-px w-full bg-black/25"></span>

          <div className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <i className="bi bi-fonts dark:text-gray-100 text-xl"></i>
              <p className="text-lg font-medium text-red-600">Last Name</p>
            </div>
            <p className="text-lg font-medium dark:text-gray-100">Shabani</p>
          </div>

          <span className="h-px w-full bg-black/25"></span>

          <div className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <i className="bi bi-mortarboard dark:text-gray-100 text-xl"></i>
              <p className="text-lg font-medium text-blue-600">
                Number Of Products
              </p>
            </div>
            <p className="text-lg font-medium dark:text-gray-100">
              {products.length}
            </p>
          </div>
        </div>

        <Link to="/infos">
          <Button type="button" className="bg-blue-600 text-xl w-full">
            Change Information
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
