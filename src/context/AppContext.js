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
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
