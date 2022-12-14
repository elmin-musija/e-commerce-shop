import { Link } from "react-router-dom";
import "./CategoryThumbnail.css";

const CategoryThumbnail = (props) => {
	return (
		<div className="category-thumbnail">
			<div>
				<Link
					className="category-thumbnail__link"
					to={`/productlist/category/${props.pr_category}/`}
				>
					<img
						id={props.pr_id}
						className="category-thumbnail__image"
						src={props.pr_src}
						alt={props.pr_alt}
					/>
					<p className="category-subhead">{props.pr_category}</p>
				</Link>
			</div>
		</div>
	);
};

export default CategoryThumbnail;
