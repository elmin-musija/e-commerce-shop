import { React, useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";

const Home = (props) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	const {
		getUserSearchString,
		getUserSearchButtonClicked,
		resetUserSearchButtonClicked,
		getFetchAllItemsData,
		resetUserSelectedFilterCategory,
		resetUserSelectedFilterPrice,
		resetUserSelectedFilterBrand,
	} = useContext(AppContext);

	useEffect(() => {
		resetUserSelectedFilterCategory();
		resetUserSelectedFilterPrice();
		resetUserSelectedFilterBrand();
	}, []);

	useEffect(() => {
		const result = getFetchAllItemsData();
		result.sort((a, b) => {
			return b.rating - a.rating;
		});
		setData(result);
	}, [getFetchAllItemsData]);

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

	useEffect(() => {
		if (getUserSearchString() !== "" && getUserSearchButtonClicked()) {
			resetUserSearchButtonClicked();
			redirectToProductList(true);
		}
		return () => {};
	}, [getUserSearchButtonClicked, getUserSearchString]);

	const redirectToProductList = (paramReturn) => {
		if (paramReturn) {
			navigate(`/productlist/search/${getUserSearchString()}`);
		}
	};

	return (
		<div className="home">
			<h1 className="home__h1">Find your favourite Product</h1>
			<SearchBar />
			<CategoryBar />
			<div className="home__button-container">
				<button
					key={uuidv4()}
					className="home__button-one"
					onClick={sortPopular}
				>
					Popular
				</button>
				<button
					key={uuidv4()}
					className="home__button-second"
					onClick={sortAtoZ}
				>
					A - Z
				</button>
			</div>
			<div className="home__grid">
				{data.map((elt, index) => {
					return (
						<Link key={index} to={`/productdetails/${elt.id}`}>
							<ProductItem
								key={index}
								pr_title={elt.title}
								pr_image={elt.images[0]}
								pr_alt={elt.brand}
								pr_rating={elt.rating}
								pr_price={elt.price}
							/>
						</Link>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
