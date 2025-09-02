import { useDispatch, useSelector } from "react-redux";
import { SetField } from "../Redux/Slices/FieldSlice";
import Navbar from "../Components/Navbar/Navbar";
import Button from "../Components/Button/Button";

const InfosPage = () => {
  const field = useSelector((state) => state.field);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-12 h-[630px] bg-white dark:bg-gray-700 w-[1050px] mt-16 py-4 px-12 shadow-xl">
      <Navbar />

      <div className="flex-grow flex flex-col justify-between pb-10">
        <div>
          <div className="relative">
            <span className="h-px w-full bg-gray-500/70 block"></span>
            <p
              className="text-lg font-medium text-gray-600/70 dark:text-gray-200/70 dark:bg-gray-700 bg-white absolute
            top-1/2 -translate-y-1/2 left-10 px-2"
            >
              Change Name
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-x-5">
            <div className="relative">
              <i className="bi bi-fonts dark:text-gray-100 text-2xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="username-input"
                name="username-input"
                value={field.userName}
                onChange={(event) => {
                  const value = event.target.value.trim();
                  dispatch(SetField({ field: "userName", value }));

                  const userNameRegex = /^[\w\d\.\$-]{3,18}$/;
                  dispatch(
                    SetField({
                      field: "isUserNameValueTrue",
                      value: userNameRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isUserNameValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />

              <div
                className={`absolute ${
                  field.userName.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="username-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isUserNameValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  UserName
                </label>
              </div>
            </div>

            <div className="relative">
              <i className="bi bi-fonts dark:text-gray-100 text-2xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="firstname-input"
                name="firstname-input"
                value={field.firstName}
                onChange={(event) => {
                  const value = event.target.value;
                  dispatch(SetField({ field: "firstName", value }));

                  const firstNameRegex = /^[a-zA-Z\s]{3,18}$/;
                  dispatch(
                    SetField({
                      field: "isFirstNameValueTrue",
                      value: firstNameRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isFirstNameValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />

              <div
                className={`absolute ${
                  field.firstName.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
                duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="firstname-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isFirstNameValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  FirstName
                </label>
              </div>
            </div>

            <div className="relative">
              <i className="bi bi-fonts dark:text-gray-100 text-2xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="lastname-input"
                name="lastname-input"
                value={field.lastName}
                onChange={(event) => {
                  const value = event.target.value;
                  dispatch(SetField({ field: "lastName", value }));

                  const lastNameRegex = /^[a-zA-Z\s]{3,18}$/;
                  dispatch(
                    SetField({
                      field: "isLastNameValueTrue",
                      value: lastNameRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isLastNameValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />
              <div
                className={`absolute ${
                  field.lastName.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
                  duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="lastname-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isLastNameValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  LastName
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <span className="h-px w-full bg-gray-500/70 block"></span>
            <p
              className="text-lg font-medium text-gray-600/70 dark:text-gray-200/70 dark:bg-gray-700 bg-white absolute
            top-1/2 -translate-y-1/2 left-10 px-2"
            >
              Change Password
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-x-5">
            <div className="relative">
              <i className="bi bi-key dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="current-password-input"
                name="current-password-input"
                value={field.currentPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  dispatch(SetField({ field: "currentPassword", value }));

                  const currentPasswordRegex = /^[\w\d\.\$-]{8,12}$/;
                  dispatch(
                    SetField({
                      field: "isCurrentPasswordValueTrue",
                      value: currentPasswordRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isCurrentPasswordValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />

              <div
                className={`absolute ${
                  field.currentPassword.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="current-password-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isCurrentPasswordValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  CurrentPassword
                </label>
              </div>
            </div>

            <div className="relative">
              <i className="bi bi-key dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="confirm-password-input"
                name="confirm-password-input"
                value={field.confirmPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  dispatch(SetField({ field: "confirmPassword", value }));

                  const confirmPasswordRegex = /^[\w\d\.\$-]{8,12}$/;
                  dispatch(
                    SetField({
                      field: "isConfirmPasswordValueTrue",
                      value: confirmPasswordRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isConfirmPasswordValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />

              <div
                className={`absolute ${
                  field.confirmPassword.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
                duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="confirm-password-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isConfirmPasswordValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  ConfirmPassword
                </label>
              </div>
            </div>

            <div className="relative">
              <i className="bi bi-key dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="new-password-input"
                name="new-password-input"
                value={field.newPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  dispatch(SetField({ field: "newPassword", value }));

                  const newPasswordRegex = /^[\w\d\.\$-]{8,12}$/;
                  dispatch(
                    SetField({
                      field: "isNewPasswordValueTrue",
                      value: newPasswordRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isNewPasswordValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />
              <div
                className={`absolute ${
                  field.newPassword.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
                  duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="new-password-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isNewPasswordValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  NewPassword
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <span className="h-px w-full bg-gray-500/70 block"></span>
            <p
              className="text-lg font-medium text-gray-600/70 dark:text-gray-200/70 dark:bg-gray-700 bg-white absolute
            top-1/2 -translate-y-1/2 left-10 px-2"
            >
              Change Email
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <i className="bi bi-envelope-at dark:text-gray-100 text-xl absolute top-1/2 left-2 -translate-y-1/2 z-20"></i>
              <input
                type="text"
                id="email-input"
                name="email-input"
                value={field.email}
                onChange={(event) => {
                  const value = event.target.value;
                  dispatch(SetField({ field: "email", value }));

                  const emailRegex = /^[\w\d\.\$\*-]+@[a-z]+\.[a-z]+$/;
                  dispatch(
                    SetField({
                      field: "isEmailValueTrue",
                      value: emailRegex.test(value),
                    })
                  );
                }}
                className={`peer pr-4 pl-10 py-2 outline-none rounded-md w-full bg-transparent border 
                ${
                  field.isEmailValueTrue
                    ? "border-green-600  focus:border-green-600"
                    : "border-gray-500/70  focus:border-blue-600"
                }
                pt-3 text-lg dark:text-gray-100`}
              />

              <div
                className={`absolute ${
                  field.email.length
                    ? "top-0 left-5 text-base"
                    : " text-lg top-1/2 left-6"
                } peer-focus:left-5 peer-focus:top-0 transition-all -translate-y-1/2
              duration-200 bg-white dark:bg-gray-700 px-3 peer-focus:text-base`}
              >
                <label
                  htmlFor="email-input"
                  className={`font-medium text-transparent bg-clip-text bg-gradient-to-r
                  ${
                    field.isEmailValueTrue
                      ? "from-green-600 to-green-400"
                      : "from-blue-600 to-blue-400"
                  }`}
                >
                  UserName
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <span className="h-px w-full bg-gradient-to-r from-blue-600 to-blue-400 block z-10"></span>
          <div className="absolute top-1/2 -translate-y-1/2 left-8 z-20 bg-white dark:bg-gray-700 px-2">
            <Button className="bg-blue-600 text-xl z-20">
              Update Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfosPage;
