import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetArticlesFromServer } from "../Redux/Slices/ArticlesSlice";
import ArticleBox from "../Components/ArticleBox/ArticleBox";
import Button from "../Components/Button/Button";
import Navbar from "../Components/Navbar/Navbar";

const ArticlesPage = () => {
  const { articlesArray, loading, error } = useSelector(
    (state) => state.articles
  );
  const dispatch = useDispatch();
  const root = document.body;

  useEffect(() => {
    dispatch(GetArticlesFromServer("https://dummyjson.com/posts"));
  }, []);

  if (loading || error) {
    root.classList.add("overflow-hidden");
  } else {
    root.classList.remove("overflow-hidden");
  }

  return (
    <div className="flex flex-col gap-y-12 h-[630px] bg-white dark:bg-gray-700 w-[1050px] mt-16 py-4 px-12 shadow-xl">
      <Navbar />

      <div
        className={`fixed inset-0 bg-gradient-to-tr from-blue-600 to-blue-500 z-50 flex items-center
        justify-center gap-x-3 transition-all duration-500 ${
          !loading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <p className="text-4xl text-white font-bold font-mono">Loading</p>
        <div className="w-10 h-10 border-4 border-stone-300 border-t-transparent rounded-full animate-spin"></div>
      </div>

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

      <div className="flex-grow flex flex-col overflow-y-auto gap-y-4 pr-4">
        {articlesArray.map((article) => (
          <ArticleBox key={article.id} {...article} />
        ))}
      </div>

      <div className="flex items-center gap-x-4">
        <Button type="button" className="bg-blue-600">
          Add New Article
        </Button>
      </div>
    </div>
  );
};

export default ArticlesPage;
