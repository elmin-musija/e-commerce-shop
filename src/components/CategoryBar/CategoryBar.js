import { useContext } from "react";
import CategoryThumbnail from "../CategoryThumbnail/CategoryThumbnail";
import AppContext from "../../context/AppContext";
import "./CategoryBar.css";

const CategoryBar = (props) => {
	const { getCategoriesArray } = useContext(AppContext);

	const displayCategoryBar = () => {
<<<<<<< HEAD
		const tmp = getCategoriesArray();
		if (tmp.length > 0) {
			return tmp.map((element, index) => {
=======
		const categories = getCategoriesArray();
		if (categories.length > 0) {
			return categories.map((element, index) => {
>>>>>>> main
				return (
					<CategoryThumbnail
						key={index}
						pr_src={element[0].thumbnail}
						pr_alt={element[0].title}
						pr_category={element[0].category}
					/>
				);
			});
		} else {
		}
	};
	return <div className="category-bar">{displayCategoryBar()}</div>;
};

export default CategoryBar;
