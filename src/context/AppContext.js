import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [searchString, setSearchString] = useState("");
	const [searchButtonClicked, setSearchBUttonClicked] = useState(false);
	const [fetchAll, setFetchAll] = useState({
		fetchState: false,
		fetchData: [],
	});
	const [searchButton, setSearchButton] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");

	const [fetchAllCategory, setFetchAllCategory] = useState({
		fetchState: false,
		fetchData: [],
	});
	const [selectedFilter, setSelectedFilter] = useState([]);
	const [selectedFilterPrice, setSelectedFilterPrice] = useState([]);

	const [cartItems, setCartItems] = useState([]);

	const handleAddToCart = (item, number, price) => {
		setCartItems([...cartItems, item, number, price]);
	};

	const setSearchButtonToggle = () => {
		setSearchButton((prevState) => !prevState);
	};
	const getSearchButtonToggle = () => {
		return searchButton;
	};

	// user input search
	const setUserSearchString = (paramSearchString) => {
		setSearchString(paramSearchString.toLowerCase());
		localStorage.setItem("searchString", paramSearchString.toLowerCase());
	};
	const getUserSearchString = () => {
		return localStorage.getItem("searchString");
	};

	const setUserSelectedCategory = (paramCategory) => {
		setSelectedCategory(paramCategory);
		localStorage.setItem("selectedCategory", paramCategory);
	};
	const getUserSelectedCategory = () => {
		return localStorage.getItem("selectedCategory");
	};

	const setUserSearchButtonClicked = () => {
		setSearchBUttonClicked(true);
	};
	const getUserSearchButtonClicked = () => {
		return searchButtonClicked;
	};
	const resetUserSearchButtonClicked = () => {
		setSearchBUttonClicked(false);
	};

	// fetch all items
	const setFetchAllItems = (paramFetchState, paramFetchData) => {
		setFetchAll((prevState) => ({
			...prevState,
			fetchState: paramFetchState,
			fetchData: paramFetchData,
		}));
		localStorage.setItem("allItemsData", JSON.stringify(paramFetchData));
		localStorage.setItem("allItemsState", paramFetchState);
	};
	const getFetchAllItemsData = () => {
		if (fetchAll.fetchState === true && fetchAll.fetchData.length !== 0) {
			return fetchAll.fetchData;
		} else {
			return JSON.parse(localStorage.getItem("allItemsData"));
		}
	};
	const getFetchAllItemsState = () => {
		return localStorage.getItem("allItemsState");
	};

	// fetch all categories
	const setFetchCategoryAll = (paramFetchState, paramFetchData) => {
		setFetchAllCategory((prevState) => ({
			...prevState,
			fetchState: paramFetchState,
			fetchData: paramFetchData,
		}));
		localStorage.setItem("allCategoriesData", JSON.stringify(paramFetchData));
		localStorage.setItem("allCategoriesState", paramFetchState);
	};

	const getFetchCategoryAllData = () => {
		if (
			fetchAllCategory.fetchState === true &&
			fetchAllCategory.fetchData.length > 0
		) {
			return fetchAllCategory.fetchData;
		} else {
			return JSON.parse(localStorage.getItem("allCategoriesData"));
		}
	};

	const getFetchCategoryAllState = () => {
		return fetchAllCategory.fetchState;
	};

	const getCategoriesArray = () => {
		if (fetchAll.fetchState && fetchAllCategory.fetchState) {
			const categoriesArray = getFetchCategoryAllData().map((category) => {
				return getFetchAllItemsData().filter((items) => {
					if (items.category === category) {
						return { img: items.thumbnail, category: items.category };
					}
				});
			});
			localStorage.setItem(
				"allCategoriesArray",
				JSON.stringify(categoriesArray)
			);
			return categoriesArray;
		}
		return JSON.parse(localStorage.getItem("allCategoriesArray"));
	};

	const setUserSelectedFilter = (paramFilter) => {
		setSelectedFilter((prevState) => [...prevState, paramFilter]);
		// localStorage.setItem(
		// 	"selectedFilter",
		// 	JSON.stringify([...selectedFilter, paramFilter])
		// );
		localStorage.setItem("selectedFilter", [...selectedFilter, paramFilter]);
	};
	const getUserSelectedFilter = () => {
		// return JSON.stringify(localStorage.getItem("selectedFilter"));
		return String(localStorage.getItem("selectedFilter")).split(",");
	};
	const checkUserSelectedFilter = (paramFilter) => {
		return selectedFilter.filter((element) => element === paramFilter).length;
	};
	// const checkUserSelectedPriceFilter = () => {
	// 	return selectedFilter.filter((element) => element.includes("€").length);
	// };
	const removeUserSelectedFilter = (paramFilter) => {
		const tmpArray = [...selectedFilter];
		const index = tmpArray.indexOf(paramFilter);
		if (index > -1) {
			tmpArray.splice(index, 1);
			setSelectedFilter([...tmpArray]);
		}
		localStorage.setItem("selectedFilter", JSON.stringify([...tmpArray]));
	};
	const resetUserSelectedFilter = () => {
		setSelectedFilter([]);
		localStorage.setItem("selectedFilter", "");
	};

	/**
	 * Price filter
	 */

	const setUserSelectedFilterPrice = (paramFilter) => {
		setSelectedFilterPrice((prevState) => [...prevState, paramFilter]);
		localStorage.setItem("selectedFilterPrice", [
			...selectedFilterPrice,
			paramFilter,
		]);
	};
	const getUserSelectedFilterPrice = () => {
		return String(localStorage.getItem("selectedFilterPrice")).split(",");
	};
	const checkUserSelectedFilterPrice = (paramFilter) => {
		return selectedFilterPrice.filter((element) => element === paramFilter)
			.length;
	};
	const removeUserSelectedFilterPrice = (paramFilter) => {
		const tmpArray = [...selectedFilterPrice];
		const index = tmpArray.indexOf(paramFilter);
		if (index > -1) {
			tmpArray.splice(index, 1);
			setSelectedFilterPrice([...tmpArray]);
		}
		localStorage.setItem("selectedFilterPrice", [...tmpArray]);
	};
	const resetUserSelectedFilterPrice = () => {
		console.log("resetUserSelectedFilterPrice");
		setSelectedFilterPrice([]);
		localStorage.setItem("selectedFilterPrice", "");
	};
	return (
		<AppContext.Provider
			value={{
				setUserSearchString,
				getUserSearchString,
				setUserSearchButtonClicked,
				getUserSearchButtonClicked,
				resetUserSearchButtonClicked,
				setFetchAllItems,
				getFetchAllItemsData,
				getFetchAllItemsState,
				setSearchButtonToggle,
				getSearchButtonToggle,
				setFetchCategoryAll,
				getFetchCategoryAllData,
				getFetchCategoryAllState,
				getCategoriesArray,
				setUserSelectedCategory,
				getUserSelectedCategory,
				handleAddToCart,
				cartItems,
				setCartItems,
				setUserSelectedFilter,
				getUserSelectedFilter,
				checkUserSelectedFilter,
				// checkUserSelectedPriceFilter,
				resetUserSelectedFilter,
				removeUserSelectedFilter,
				// Price
				setUserSelectedFilterPrice,
				getUserSelectedFilterPrice,
				checkUserSelectedFilterPrice,
				removeUserSelectedFilterPrice,
				resetUserSelectedFilterPrice,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
