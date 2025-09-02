import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { RemoveUserFromServer } from "../../Redux/Slices/UsersSlice";
import { ClearField } from "../../Redux/Slices/FieldSlice";

const UserItem = (props) => {
  const dispatch = useDispatch();

  const removeUserHandler = () => {
    Swal.fire({
      title: "Are You Sure You Want To Delete This User?",
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

      dispatch(RemoveUserFromServer(`https://dummyjson.com/users/${props.id}`))
        .unwrap()
        .then(() => {
          Swal.fire({
            title: "User Successfully Deleted.",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: {
              popup: "bg-gradient-to-r from-blue-800 to-blue-700",
              title: "text-white font-bold font-mono",
              confirmButton:
                "text-2xl font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700",
            },
          });
          dispatch(ClearField({ field: "searchBar" }));
        })
        .catch(() => {
          Swal.fire({
            title: "User Deletion Failed.",
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
          dispatch(ClearField({ field: "searchBar" }));
        });
    });
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border border-gray-500/70 rounded-md shadow-lg">
      <div className="flex items-center gap-x-2">
        <img
          alt="Profile Image"
          src={props.image}
          loading="lazy"
          className="w-24 h-20 object-cover"
        />

        <div>
          <p className="dark:text-gray-100 text-xl font-medium">
            {`${props.firstName} ${props.lastName}`}
          </p>
          <p className="dark:text-gray-200 text-lg">{props.email}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <Button
          type="button"
          className="bg-red-600 text-xl w-24"
          click={removeUserHandler}
        >
          Delete
        </Button>
        <Button
          type="button"
          className="bg-blue-600 text-xl w-36"
          click={() => {
            props.setShowInformationModal(true);
            props.setSelectedUser(props);
          }}
        >
          Information
        </Button>
      </div>
    </div>
  );
};

export default UserItem;
