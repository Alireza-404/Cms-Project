import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Swal from "sweetalert2";
import { RemoveProductFromServer } from "../../Redux/Slices/ProductsSlice";

const ProductsBox = (props) => {
  const dispatch = useDispatch();

  const removeProductHandler = () => {
    Swal.fire({
      title: "Are You Sure You Want To Delete This Product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "bg-gradient-to-r from-blue-800 to-blue-700",
        title: "text-white font-bold font-mono",
        confirmButton:
          "text-2xl font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700",
        cancelButton:
          "text-2xl font-semibold rounded-md text-white bg-red-600 hover:bg-red-700",
        icon: "!border-orange-400 !text-yellow-400",
      },
    }).then((result) => {
      if (!result.isConfirmed) return;

      dispatch(
        RemoveProductFromServer(`https://dummyjson.com/products/${props.id}`)
      )
        .unwrap()
        .then(() => {
          Swal.fire({
            title: "Product Successfully Deleted.",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: {
              popup: "bg-gradient-to-r from-blue-800 to-blue-700",
              title: "text-white font-bold font-mono",
              confirmButton:
                "text-2xl font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700",
            },
          });
        })

        .catch(() => {
          Swal.fire({
            title: "Product Deletion Failed.",
            icon: "error",
            confirmButtonText: "Ok",
            customClass: {
              popup: "bg-gradient-to-r from-red-800 to-red-700",
              title: "text-white font-bold font-mono",
              confirmButton:
                "text-2xl font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700",
              cancelButton:
                "text-2xl font-semibold rounded-md text-white bg-red-600 hover:bg-red-700",
              icon: "!border-orange-400 !text-yellow-400",
            },
          });
        });
    });
  };

  const showProductUpdateModalHandler = () => {
    props.setShowUpdateProductModal(true);
    props.setSelectedProduct(props);
  };

  return (
    <div className="flex items-center rounded-md overflow-hidden border border-gray-500/70 flex-shrink-0 h-[180px]">
      <img
        alt="Product-Image"
        src={props.images[0]}
        loading="lazy"
        className="w-48 h-32 object-cover flex-shrink-0"
      />
      <div className="flex flex-col w-full gap-y-4 justify-between h-full">
        <div className="py-2 pr-6 pl-2">
          <p className="text-yellow-500 text-2xl font-medium font-mono line-clamp-1 w-96">
            {props.title}
          </p>
          <p className="dark:text-gray-200 text-[17px] line-clamp-2">
            {props.description}
          </p>
        </div>

        <div className="dark:bg-gray-800 bg-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-x-7">
            <p className="font-medium dark:text-gray-100">
              <i className="bi bi-wallet2 text-blue-600 mr-2"></i>
              Price : {props.price}$
            </p>
            <p className="font-medium dark:text-gray-100">
              <i className="bi bi-folder2-open text-blue-600 mr-2"></i>
              Category : {props.category}
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <Button
              type="button"
              className="bg-red-600 text-sm"
              click={removeProductHandler}
            >
              Delete
            </Button>
            <Button
              type="button"
              className="bg-blue-600 text-sm"
              click={showProductUpdateModalHandler}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsBox;
