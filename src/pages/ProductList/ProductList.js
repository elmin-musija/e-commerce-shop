import { useState, useEffect, useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import FooterSticky from "../../components/Footer/FooterSticky";
import AppContext from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
	const [data, setData] = useState([]);

	const { search, category, filter } = useParams();

	const {
		getUserSearchString,
		setUserSearchString,
		getFetchAllItemsData,
		resetUserSearchButtonClicked,
		resetUserSelectedFilterCategory,
		resetUserSelectedFilterPrice,
		resetUserSelectedFilterBrand,
		getUserSelectedFilterCategory,
		getUserSelectedFilterPrice,
		getUserSelectedFilterBrand,
	} = useContext(AppContext);

	useEffect(() => {
		if (search) {
			if (getUserSearchString() !== "") {
				const result = getFetchAllItemsData().filter((element) => {
					if (
						element.title.toLowerCase().includes(getUserSearchString()) ||
						element.brand.toLowerCase().includes(getUserSearchString()) ||
						element.description.toLowerCase().includes(getUserSearchString())
					) {
						return element;
					}
				});
				setData(result);
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
	]);

	useEffect(() => {
		if (category) {
			if (getUserSearchString() === "") {
				const result = getFetchAllItemsData().filter((element) => {
					if (element.category.toLowerCase().includes(category)) {
						return element;
					}
				});
				setData(result);
			} else if (getUserSearchString() !== "") {
				const result = getFetchAllItemsData().filter((element) => {
					if (
						element.category.toLowerCase().includes(category) &&
						element.title.toLowerCase().includes(getUserSearchString())
					) {
						return element;
					}
				});
				setData(result);
			}
		}
		return () => {
			cleanUpCategory();
		};
	}, [
		category,
		getFetchAllItemsData,
		getUserSearchString,
		resetUserSearchButtonClicked,
	]);

	const cleanUpCategory = () => {
		resetUserSearchButtonClicked();
	};

	useEffect(() => {
		if (filter) {
			let resultArray = [];
			const userSelectedFilterCategory = getUserSelectedFilterCategory();
			const userSelectedFilterPrice = getUserSelectedFilterPrice();
			const userSelectedFilterBrand = getUserSelectedFilterBrand();
			const allItems = getFetchAllItemsData();
			if (filter === "all") {
				setData(allItems);
			} else if (filter === "filter") {
				if (String(userSelectedFilterCategory).length !== 0) {
					const resultCategory = allItems.filter((element) => {
						for (let key of userSelectedFilterCategory) {
							if (element.category.toLowerCase().includes(key.toLowerCase())) {
								return true;
							}
						}
					});
					resultArray = [...resultCategory];
				}
				if (String(userSelectedFilterPrice).length !== 0) {
					let resultPrice = [];
					const [minPrice, maxPrice] = userSelectedFilterPrice[0].split("-");
					if (resultArray.length !== 0) {
						resultPrice = resultArray.filter((element) => {
							if (Number(maxPrice) !== 0) {
								if (
									element.price >= Number(minPrice) &&
									element.price <= Number(maxPrice)
								) {
									return true;
								}
							} else {
								if (element.price >= Number(minPrice)) {
									return true;
								}
							}
						});
					} else {
						resultPrice = allItems.filter((element) => {
							if (Number(maxPrice) !== 0) {
								if (
									element.price >= Number(minPrice) &&
									element.price <= Number(maxPrice)
								) {
									return true;
								}
							} else {
								if (element.price >= Number(minPrice)) {
									return true;
								}
							}
						});
					}
					resultArray = [...resultPrice];
				}
				if (String(userSelectedFilterBrand.length !== 0)) {
					let resultBrand = [];
					if (resultArray.length !== 0) {
						resultBrand = resultArray.filter((element) => {
							for (let key of userSelectedFilterBrand) {
								if (element.brand.toLowerCase().includes(key.toLowerCase())) {
									return true;
								}
							}
						});
					} else {
						resultBrand = allItems.filter((element) => {
							for (let key of userSelectedFilterBrand) {
								if (element.brand.toLowerCase().includes(key.toLowerCase())) {
									return true;
								}
							}
						});
					}
					resultArray = [...resultBrand];
				}
				setData(resultArray);
			}
		}
	}, [filter, getFetchAllItemsData]);

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
