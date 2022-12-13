import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = (props) => {
	const { search } = useParams();

	return (
		<div className="product-details">
			<h1>Product Details</h1>
		</div>
	);
};

export default ProductDetails;
