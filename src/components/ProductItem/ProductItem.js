import "./ProductItem.css";
import { ReactComponent as YellowStar } from "../../img/YellowStar.svg";
import { ReactComponent as RoundBluePlusButton } from "../../img/RoundBluePlusButton.svg";

const ProductItem = (props) => {
	return (
		<div className="product-item">
			<img
				className="product-item__img"
				src={props.pr_image}
				alt={props.pr_alt}
			/>
			<div className="product-item__flex">
				<div>
					<p className="product-item__p__rating">
						<YellowStar className="product-item_star" />
						{props.pr_rating}
					</p>
					<p className="product-item__p__description">{props.pr_description}</p>
					<p className="product-item__p__price">{props.pr_price}$</p>
				</div>
				<div className="product-item__buttonflex">
					<RoundBluePlusButton className="product-item__button" />
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
