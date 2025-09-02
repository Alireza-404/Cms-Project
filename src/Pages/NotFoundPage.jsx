import { Link } from "react-router-dom";
import ParticlesBackground from "../Components/ParticlesLibrary/ParticlesLibrary";

const NotFoundPage = () => {
  return (
    <div>
      <ParticlesBackground className="absolute z-10 bg-gray-800" />
      <div
        className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500/90
         to-yellow-600/90 w-[550px] h-96 z-20 border-2 border-white rounded-lg flex flex-col items-center
         justify-center gap-y-7"
      >
        <div className="flex flex-col items-center">
          <p className="font-semibold text-7xl text-white font-mono">
            Error 404
          </p>
          <p className="font-semibold text-4xl text-white">
            Page <span className="text-red-600">Not</span> Found
          </p>
        </div>
        <Link
          to={"/"}
          className="bg-gray-800 text-white font-semibold px-7 py-5 text-xl rounded-md"
        >
          Go To Users Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
