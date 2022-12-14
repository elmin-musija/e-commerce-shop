import CategoryThumbnail from "../CategoryThumbnail/CategoryThumbnail";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./CategoryBar.css";

const CategoryBar = (props) => {
  const { getCategoriesArray } = useContext(AppContext);

  const displayCategoryBar = () => {
    const tmp = getCategoriesArray();
    if (tmp.length > 0) {
      return tmp.map((element) => {
        return (
          <CategoryThumbnail
            pr_src={element[0].thumbnail}
            pr_alt={element[0].title}
            pr_category={element[0].category}
          />
        );
      });
    }
  };

  return <div className="category-bar">{displayCategoryBar()}</div>;
};

export default CategoryBar;
