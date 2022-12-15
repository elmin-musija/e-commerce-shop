import { useState, useEffect, useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import FooterSticky from "../../components/Footer/FooterSticky";
import AppContext from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
	let result = [];
	const [data, setData] = useState([]);

	const { search, category, filter } = useParams();

	const {
		getUserSearchString,
		setUserSearchString,
		getFetchAllItemsData,
		resetUserSearchButtonClicked,
		resetUserSelectedFilter,
		getUserSelectedFilter,
	} = useContext(AppContext);

	useEffect(() => {
		if (search) {
			if (getUserSearchString() !== "") {
				result = getFetchAllItemsData().filter((element) => {
					if (
						element.title.toLowerCase().includes(getUserSearchString()) ||
						element.brand.toLowerCase().includes(getUserSearchString()) ||
						element.description.toLowerCase().includes(getUserSearchString())
					) {
						return element;
					}
				});
				// setData(result);
				setUserSearchString("");
				resetUserSearchButtonClicked();
			}
		}
	}, [
		search,
		getUserSearchString,
		getFetchAllItemsData,
		resetUserSearchButtonClicked,
		setUserSearchString,
		result,
	]);

	useEffect(() => {
		if (category) {
			if (getUserSearchString() === "") {
				result = getFetchAllItemsData().filter((element) => {
					if (element.category.toLowerCase().includes(category)) {
						return element;
					}
				});
				// setData(result);
				resetUserSearchButtonClicked();
			} else if (getUserSearchString() !== "") {
				result = getFetchAllItemsData().filter((element) => {
					if (
						element.category.toLowerCase().includes(category) &&
						element.title.toLowerCase().includes(getUserSearchString())
					) {
						return element;
					}
				});
				setData(result);
				resetUserSearchButtonClicked();
			}
		}
	}, [
		category,
		getFetchAllItemsData,
		getUserSearchString,
		resetUserSearchButtonClicked,
		result,
	]);

	useEffect(() => {
		const userSelectedFilter = getUserSelectedFilter();
		if (filter === "all") {
			const allItems = getFetchAllItemsData();
			setData(allItems);
		} else if (filter === "filter") {
			const allItems = getFetchAllItemsData();
			result = allItems.filter((element) => {
				for (let key of userSelectedFilter) {
					if (element.brand.includes(key) || element.category.includes(key)) {
						return true;
					}
				}
			});
			// setData(result);
		}
		// resetUserSelectedFilter();
	}, [
		filter,
		getFetchAllItemsData,
		getUserSelectedFilter,
		resetUserSelectedFilter,
		result,
	]);

	// useEffect(() => {
	// 	setData(result);
	// }, [result]);

	return (
		<div className="product-list">
			<SearchBar className="product-list__searchbar" />
			<p className="product-list__p">Sort by: </p>
			<div className="product-list-props">
				{data.map((element, index) => {
					return (
						<Link key={index} to={`/productdetails/${element.id}`}>
							<ProductItem
								key={index}
								pr_image={element.images[0]}
								pr_title={element.title}
								pr_alt={element.brand}
								pr_rating={element.rating}
								pr_price={element.price}
							/>
						</Link>
					);
				})}
			</div>
			<FooterSticky />
		</div>
	);
};

export default ProductList;
