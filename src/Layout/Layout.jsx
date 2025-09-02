import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-800">
      {props.showHeader && <Header />}

      <div className="flex-grow flex flex-col">
        <div className="flex justify-between container mx-auto">
          {<Sidebar />}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
