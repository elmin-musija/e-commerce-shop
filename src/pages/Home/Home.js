import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = (props) => {
	const { getUserSearchString } = useContext(AppContext);

	const redirectToProductDetails = () => {
		if (getUserSearchString() !== "") {
			return <Navigate to={`/productdetails/${getUserSearchString()}`} />;
		}
	};

	return (
		<div className="home">
			<h1 className="home__h1">Find your favourite Product</h1>
			<SearchBar />
			<Footer />
			{redirectToProductDetails()}
		</div>
	);
};

export default Home;
