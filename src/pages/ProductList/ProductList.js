import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import "./ProductList.css";

const ProductList = (props) => {
	return (
		<div className="product-list">
			<SearchBar className="product-list__searchbar" />
			<p className="product-list__p">Sort by: </p>
			<Footer />
		</div>
	);
};

export default ProductList;
