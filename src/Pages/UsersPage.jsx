import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersFromServer } from "../Redux/Slices/UsersSlice";
import Button from "../Components/Button/Button";
import Navbar from "../Components/Navbar/Navbar";
import UserItem from "../Components/UserItem/UserItem";
import Overlay from "../Components/Overlay/Overlay";
import { SetField } from "../Redux/Slices/FieldSlice";

const UsersPage = () => {
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { usersArray, loading, error } = useSelector((state) => state.users);
  const field = useSelector((state) => state.field);
  const dispatch = useDispatch();
  const root = document.body;

  useEffect(() => {
    dispatch(GetUsersFromServer("https://dummyjson.com/users"));
  }, []);

  useEffect(() => {
    if (usersArray.length) {
      setFilteredUsers(usersArray);
    }
  }, [usersArray]);

  useEffect(() => {
    if (field.searchBar.trim() === "") {
      setFilteredUsers(usersArray);
    }
  }, [field.searchBar, usersArray]);

  if (loading || error) {
    root.classList.add("overflow-hidden");
  } else {
    root.classList.remove("overflow-hidden");
  }

  return (
    <div className="flex flex-col gap-y-12 h-[630px] bg-white dark:bg-gray-700 w-[1050px] mt-16 py-4 px-12 shadow-xl">
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
          <p className="text-4xl text-white font-bold font-mono">
            Oops, Error!
          </p>
          <p className="text-2xl text-white font-bold font-mono text-center">
            {error}
          </p>
        </div>
      </div>

      <Overlay
        showModal={showInformationModal}
        click={() => {
          setShowInformationModal(false);
          setSelectedUser(null);
        }}
      />

      {/* Information Modal */}
      <div
        className={`px-5 py-2.5 rounded-md bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[500px] h-[600px] flex flex-col justify-center
        items-center ${
          showInformationModal
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-50"
        }`}
      >
        <img
          className="border-8 border-double border-gray-100 mb-5"
          alt="selected-user-image"
          src={selectedUser?.image ?? "N/A"}
        />
        <div className="flex flex-col gap-y-1.5 items-center">
          <p className="text-white font-semibold font-mono text-[22px]">
            ID : {selectedUser?.id ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            UserName : {selectedUser?.username ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            FirstName : {selectedUser?.firstName ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            LastName : {selectedUser?.lastName ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px] text-center">
            Email : {selectedUser?.email ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            Password : {selectedUser?.password ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            Phone : {selectedUser?.phone ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            Gender : {selectedUser?.gender ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            <span className="text-red-600">BloodGroup</span> :{" "}
            {selectedUser?.bloodGroup ?? "N/A"}
          </p>
          <p className="text-white font-semibold font-mono text-[22px]">
            Role : {selectedUser?.role ?? "N/A"}
          </p>
        </div>
      </div>

      <Navbar />

      {/* SearchBar */}
      <div className="flex items-center justify-between pr-4">
        <input
          className="bg-transparent border border-gray-500/70 px-4 py-2 text-xl rounded-md w-[750px] outline-none
          dark:text-gray-100 font-medium"
          placeholder="Search"
          id="search-input"
          name="search-input"
          value={field.searchBar}
          onChange={(event) => {
            const value = event.target.value;
            dispatch(SetField({ field: "searchBar", value }));
          }}
        />
        <Button
          type="button"
          className="bg-gray-500 text-xl w-36"
          click={() => {
            const searchBarValue = field.searchBar.toLowerCase().trim();
            const result = usersArray.filter(
              (user) =>
                user.firstName.toLowerCase().includes(searchBarValue) ||
                user.lastName.toLowerCase().includes(searchBarValue)
            );
            setFilteredUsers(result);
          }}
        >
          <i className="bi bi-search mr-3"></i>
          Search
        </Button>
      </div>

      <div className="flex-grow flex flex-col gap-y-4 overflow-y-auto pr-4">
        {filteredUsers.map((user) => (
          <UserItem
            key={user.id}
            {...user}
            showInformationModal={showInformationModal}
            setShowInformationModal={setShowInformationModal}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
