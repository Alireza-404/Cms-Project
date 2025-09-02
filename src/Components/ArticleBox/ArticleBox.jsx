import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Swal from "sweetalert2";
import { RemoveArticleFromServer } from "../../Redux/Slices/ArticlesSlice";

const ArticleBox = (props) => {
  const dispatch = useDispatch();

  const removeArticleHandler = () => {
    Swal.fire({
      title: "Are You Sure You Want To Delete This Article?",
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
        RemoveArticleFromServer(`https://dummyjson.com/posts/${props.id}`)
      )
        .unwrap()
        .then(() => {
          Swal.fire({
            title: "Article Successfully Deleted.",
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
            title: "Article Deletion Failed.",
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

  return (
    <div className="flex items-center rounded-md overflow-hidden border border-gray-500/70 flex-shrink-0">
      <div className="flex flex-col gap-y-4 justify-between h-full">
        <div className="py-2 pr-6 pl-3">
          <p className="text-yellow-500 text-2xl font-medium font-mono line-clamp-1">
            {props.title}
          </p>
          <p className="dark:text-gray-200 text-[19px] line-clamp-2">
            {props.body}
          </p>
        </div>

        <div className="dark:bg-gray-800 bg-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-x-7">
            <p className="font-medium dark:text-gray-100">
              <i className="bi bi-people text-blue-600 mr-2"></i>Views : 129
            </p>
            <p className="font-medium dark:text-gray-100">
              <i className="bi bi-hand-thumbs-up text-blue-600 mr-2"></i>
              Likes : {props.reactions.likes}
            </p>
            <p className="font-medium dark:text-gray-100">
              <i className="bi bi-hand-thumbs-down text-blue-600 mr-2"></i>
              DisLikes : {props.reactions.dislikes}
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <Button
              type="button"
              className="bg-red-600 text-sm"
              click={removeArticleHandler}
            >
              Delete
            </Button>
            <Button type="button" className="bg-blue-600 text-sm">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;
