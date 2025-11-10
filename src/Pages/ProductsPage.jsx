import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  AddProductToServer,
  GetProductsFromServer,
  UpdateProductOnServer,
} from "../Redux/Slices/ProductsSlice";
import { SetField } from "../Redux/Slices/FieldSlice";
import Button from "../Components/Button/Button";
import ProductsBox from "../Components/ProductBox/ProductBox";
import Navbar from "../Components/Navbar/Navbar";
import Overlay from "../Components/Overlay/Overlay";

const ProductsPage = () => {
  const { productsArray, loading, error } = useSelector(
    (state) => state.products
  );
  const field = useSelector((state) => state.field);
  const dispatch = useDispatch();
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const root = document.body;

  useEffect(() => {
    dispatch(GetProductsFromServer("https://dummyjson.com/products"));
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      dispatch(
        SetField({ field: "productTitleForEdit", value: selectedProduct.title })
      );
      dispatch(
        SetField({
          field: "productBodyForEdit",
          value: selectedProduct.description,
        })
      );
      dispatch(SetField({ field: "isProductTitleForEditTrue", value: true }));
      dispatch(SetField({ field: "isProductBodyForEditTrue", value: true }));
    }
  }, [selectedProduct]);

  if (loading || error) {
    root.classList.add("overflow-hidden");
  } else {
    root.classList.remove("overflow-hidden");
  }

  const updateProductHandler = () => {
    if (field.isProductTitleForEditTrue && field.isProductBodyForEditTrue) {
      dispatch(
        UpdateProductOnServer({
          url: `https://dummyjson.com/products/${selectedProduct.id}`,
          productData: {
            title: field.productTitleForEdit,
            description: field.productBodyForEdit,
          },
        })
      );
      setShowUpdateProductModal(false);
      setSelectedProduct(null);
    }
  };

  const addProductHandler = () => {
    if (
      field.isProductTitleForAddTrue &&
      field.isProductBodyForAddTrue &&
      field.isProductCategoryForAddTrue &&
      field.isProductPriceForAddTrue
    ) {
      const newProduct = {
        id: crypto.randomUUID(),
        title: field.productTitleForAdd,
        description: field.productBodyForAdd,
        category: field.productCategoryForAdd,
        price: field.productPriceForAdd,
        image: field.productImageForAdd,
      };
      dispatch(
        AddProductToServer({
          url: "https://dummyjson.com/products",
          productData: newProduct,
        })
      );
    }
  };

  return (
    <div className="flex flex-col gap-y-12 h-[630px] bg-white dark:bg-gray-700 w-[1050px] mt-16 py-4 px-12 shadow-xl">
      <Navbar />

      <Overlay
        showModal={showUpdateProductModal || showAddProductModal}
        click={() => {
          setSelectedProduct(null);
          setShowUpdateProductModal(false);
          setShowAddProductModal(false);
        }}
      />

      {/* Edit Modal */}
      <div
        className={`px-5 py-7 rounded-md bg-white dark:bg-gray-700 transition-all duration-300
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col gap-y-10
        items-center w-96 ${
          showUpdateProductModal
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-50"
        }`}
      >
        <div className="relative w-full">
          <i className="bi bi-fonts dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
          <input
            type="text"
            id="product-title-for-edit-input"
            name="product-title-for-edit-input"
            value={field.productTitleForEdit}
            spellCheck="false"
            onChange={(event) => {
              const value = event.target.value;
              dispatch(SetField({ field: "productTitleForEdit", value }));

              const productTitleRegex = /^.{4,}$/;
              dispatch(
                SetField({
                  field: "isProductTitleForEditTrue",
                  value: productTitleRegex.test(value),
                })
              );
            }}
            className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isProductTitleForEditTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
          />

          <div
            className={`absolute ${
              field.productTitleForEdit.length
                ? "top-0 left-5 text-base"
                : " text-lg top-1/2 left-6"
            } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
          >
            <label
              htmlFor="product-title-for-edit-input"
              className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isProductTitleForEditTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
            >
              ProductTitle
            </label>
          </div>
        </div>

        <div className="relative w-full">
          <textarea
            spellCheck="false"
            type="text"
            id="product-body-for-edit-textarea"
            name="product-body-for-edit-textarea"
            value={field.productBodyForEdit}
            rows={"7"}
            placeholder="Product Body..."
            onChange={(event) => {
              const value = event.target.value;
              dispatch(SetField({ field: "productBodyForEdit", value }));

              const productBodyRegex = /^.{10,}$/;
              dispatch(
                SetField({
                  field: "isProductBodyForEditTrue",
                  value: productBodyRegex.test(value),
                })
              );
            }}
            className={`peer px-4 py-2 resize-none outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isProductBodyForEditTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
          />
        </div>

        <Button
          className="text-xl bg-gradient-to-tr from-blue-600 to-blue-500 w-full"
          click={updateProductHandler}
        >
          Update
        </Button>
      </div>

      {/* Add Product */}
      <div
        className={`px-5 py-7 rounded-md bg-white dark:bg-gray-700 transition-all duration-300
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col gap-y-10
        items-center w-[525px] ${
          showAddProductModal
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-50"
        }`}
      >
        <div className="relative w-full">
          <i className="bi bi-fonts dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
          <input
            type="text"
            id="product-title-for-add-input"
            name="product-title-for-add-input"
            value={field.productTitleForAdd}
            spellCheck="false"
            onChange={(event) => {
              const value = event.target.value;
              dispatch(SetField({ field: "productTitleForAdd", value }));

              const productTitleRegex = /^.{4,}$/;
              dispatch(
                SetField({
                  field: "isProductTitleForAddTrue",
                  value: productTitleRegex.test(value),
                })
              );
            }}
            className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isProductTitleForAddTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
          />

          <div
            className={`absolute ${
              field.productTitleForAdd.length
                ? "top-0 left-5 text-base"
                : " text-lg top-1/2 left-6"
            } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
          >
            <label
              htmlFor="product-title-for-add-input"
              className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isProductTitleForAddTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
            >
              ProductTitle
            </label>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-x-3">
          <div className="relative w-full">
            <i className="bi bi-fonts dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
            <input
              type="text"
              id="product-category-for-add-input"
              name="product-category-for-add-input"
              value={field.productCategoryForAdd}
              spellCheck="false"
              onChange={(event) => {
                const value = event.target.value;
                dispatch(SetField({ field: "productCategoryForAdd", value }));

                const productCategoryRegex = /^[a-zA-Z_]+$/;
                dispatch(
                  SetField({
                    field: "isProductCategoryForAddTrue",
                    value: productCategoryRegex.test(value),
                  })
                );
              }}
              className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isProductCategoryForAddTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
            />

            <div
              className={`absolute ${
                field.productCategoryForAdd.length
                  ? "top-0 left-5 text-base"
                  : " text-lg top-1/2 left-6"
              } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
            >
              <label
                htmlFor="product-category-for-add-input"
                className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isProductCategoryForAddTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
              >
                ProductCategory
              </label>
            </div>
          </div>

          <div className="relative w-full">
            <i className="bi bi-fonts dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
            <input
              type="text"
              id="product-price-for-add-input"
              name="product-price-for-add-input"
              value={field.productPriceForAdd}
              spellCheck="false"
              onChange={(event) => {
                const value = event.target.value;
                dispatch(SetField({ field: "productPriceForAdd", value }));

                const productTitleRegex = /^[\d\.]+$/;
                dispatch(
                  SetField({
                    field: "isProductPriceForAddTrue",
                    value: productTitleRegex.test(value),
                  })
                );
              }}
              className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isProductPriceForAddTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
            />

            <div
              className={`absolute ${
                field.productPriceForAdd.length
                  ? "top-0 left-5 text-base"
                  : " text-lg top-1/2 left-6"
              } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
            >
              <label
                htmlFor="product-price-for-add-input"
                className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isProductPriceForAddTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
              >
                ProductPrice
              </label>
            </div>
          </div>
        </div>

        <div className="relative w-full flex flex-col gap-y-2">
          <label
            htmlFor="product-image-for-add-input"
            className="block mt-2 font-medium dark:text-gray-100"
          >
            Upload Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="product-image-for-add-input"
            name="product-image-for-add-input"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-md text-white"
            onChange={(event) => {
              const file = event.target.files[0];

              const reader = new FileReader();
              reader.onloadend = () => {
                dispatch(
                  SetField({ type: "productImageForAdd", value: reader.result })
                );
              };

              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>

        <div className="relative w-full">
          <textarea
            spellCheck="false"
            type="text"
            id="product-body-for-add-textarea"
            name="product-body-for-add-textarea"
            value={field.productBodyForAdd}
            rows={"7"}
            placeholder="Product Body..."
            onChange={(event) => {
              const value = event.target.value;
              dispatch(SetField({ field: "productBodyForAdd", value }));

              const productBodyRegex = /^.{10,}$/;
              dispatch(
                SetField({
                  field: "isProductBodyForAddTrue",
                  value: productBodyRegex.test(value),
                })
              );
            }}
            className={`peer px-4 py-2 resize-none outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isProductBodyForAddTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
          />
        </div>

        <Button
          className="text-xl bg-gradient-to-tr from-blue-600 to-blue-500 w-full"
          click={addProductHandler}
        >
          Add
        </Button>
      </div>

      {/* Loading */}
      <div
        className={`fixed inset-0 bg-gradient-to-tr from-blue-600 to-blue-500 z-50 flex items-center
        justify-center gap-x-3 transition-all duration-500 ${
          !loading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <p className="text-4xl text-white font-bold font-mono">Loading</p>
        <div className="w-10 h-10 border-4 border-stone-300 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Error */}
      <div
        className={`fixed inset-0 bg-gradient-to-tr from-red-600 to-red-500 z-50 flex items-center
        justify-center gap-x-3 transition-all duration-500 ${
          !error ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <div className="flex flex-col gap-y-3">
          <p className="text-4xl text-white font-bold font-mono text-center">
            Oops, Error!
          </p>
          <p className="text-2xl text-white font-bold font-mono text-center">
            {error}
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col overflow-y-auto gap-y-4 pr-4">
        {productsArray.map((product) => (
          <ProductsBox
            key={product.id}
            {...product}
            setShowUpdateProductModal={setShowUpdateProductModal}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>

      <div>
        <div className="flex items-center gap-x-4">
          <Button
            type="button"
            className="bg-blue-600"
            click={() => setShowAddProductModal(true)}
          >
            Add New Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
