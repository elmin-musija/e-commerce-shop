import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem"
import "./Home.css";

const Home = (props) => {
	const [data, setData] = useState([])
	const { getUserSearchString, setUserSearchString } = useContext(AppContext);
	const { getFetchAllItemsState, getFetchAllItemsData } =
		useContext(AppContext);

		useEffect(() => {
				const result = getFetchAllItemsData();
				result.sort((a, b) => {
					return b.rating - a.rating;
					
				});
				setData(result);
		}, []);
	console.log(data);

	const redirectToProductDetails = () => {
		if (getUserSearchString() !== "") {
			return <Navigate to={"/productlist"} />;
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
			<div className="home__grid">
				{data.map((elt, index) =>{
				return <ProductItem key={index} pr_image={elt.images[0]} pr_alt={elt.brand} pr_rating={elt.rating} pr_price={elt.price}/>
			})}
			</div>
			<Footer />
			{redirectToProductDetails()}
		</div>
	);
};

export default Home;
