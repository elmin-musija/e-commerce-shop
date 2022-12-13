import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = (props) => {
	const { getUserSearchString } = useContext(AppContext);
	const { getFetchAllItemsState, getFetchAllItemsData } =
		useContext(AppContext);

	const redirectToProductDetails = () => {
		if (getUserSearchString() !== "") {
			return <Navigate to={`/productdetails/${getUserSearchString()}`} />;
		}
	};

	const displayFetchDataBrand = () => {
		if (getFetchAllItemsState() === true) {
			return getFetchAllItemsData().map((element, index) => {
				return <p key={index}>{element.brand}</p>;
			});
		}
	};

	return (
		<div className="home">
			<h1 className="home__h1">Find your favourite Product</h1>
			<SearchBar />
			<CategoryBar />
			<Footer />
			{/* Demo */}
			{/* {displayFetchDataBrand()} */}
			{redirectToProductDetails()}
		</div>
	);
};

export default Home;
