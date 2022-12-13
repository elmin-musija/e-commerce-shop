import CategoryThumbnail from "../CategoryThumbnail/CategoryThumbnail";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./CategoryBar.css";

const CategoryBar = (props) => {
  const { getCategoriesArray } = useContext(AppContext);
  return (
    <div className="category-bar">
      <CategoryThumbnail />
    </div>
  );
};

export default CategoryBar;
