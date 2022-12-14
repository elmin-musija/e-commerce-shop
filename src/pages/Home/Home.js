import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";
import React from 'react';
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

		const sortPopular = (event) => {
			event.preventDefault();
			const sortedPopular = [...data].sort((a, b) => {
					return b.rating - a.rating;
				});
			setData(sortedPopular);
		  };
	
		const sortAtoZ = (event) => {
			event.preventDefault();
			const sortedData = [...data].sort((elt1, elt2) => {
			  if (elt1.title < elt2.title) return -1;
			  if (elt1.title > elt2.title) return 1;
			  return 0;
			});
			setData(sortedData);
		  };

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
			<div className="home__button-container">
				<button className="home__button-one" onClick={sortPopular}>Popular</button>
				<button className="home__button-second" onClick={sortAtoZ}>A - Z</button>
			</div>
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
