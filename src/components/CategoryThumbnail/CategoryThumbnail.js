import "./CategoryThumbnail.css";

const CategoryThumbnail = (props) => {
	return (
		<div className="category-thumbnail">
			<div>
				<img
					className="category-thumbnail__image"
					src={props.pr_src}
					alt={props.pr_alt}
				/>
				<p className="category-subhead">{props.pr_category}</p>
			</div>
		</div>
	);
};

export default CategoryThumbnail;
