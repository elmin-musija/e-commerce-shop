import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Home.css";

const Home = (props) => {
	const [data, setData] = useState([]);

	const {
		getUserSearchString,
		getUserSearchButtonClicked,
		resetUserSearchButtonClicked,
		getFetchAllItemsData,
	} = useContext(AppContext);

	useEffect(() => {
		const result = getFetchAllItemsData();
		result.sort((a, b) => {
			return b.rating - a.rating;
		});
		setData(result);
	}, []);
	console.log(data);

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
			<div className="home__grid">
				{data.map((elt, index) => {
					return (
						<ProductItem
							key={index}
							pr_image={elt.images[0]}
							pr_alt={elt.brand}
							pr_rating={elt.rating}
							pr_price={elt.price}
						/>
					);
				})}
			</div>
			<Footer />
			{redirectToProductDetails()}
		</div>
	);
};

export default Home;
