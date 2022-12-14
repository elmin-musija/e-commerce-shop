import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = (props) => {
	const {
		getUserSearchString,
		getUserSearchButtonClicked,
		resetUserSearchButtonClicked,
	} = useContext(AppContext);

	const redirectToProductDetails = () => {
		if (getUserSearchString() !== "" && getUserSearchButtonClicked()) {
			resetUserSearchButtonClicked();
			return <Navigate to={"/productlist"} />;
		}
	};

	useEffect(redirectToProductDetails, []);

	return (
		<div className="home">
			<h1 className="home__h1">Find your favourite Product</h1>
			<SearchBar />
			<CategoryBar />
			<Footer />
			{redirectToProductDetails()}
		</div>
	);
};

export default Home;
