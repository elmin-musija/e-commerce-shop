import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [searchString, setSearchString] = useState("");

	const [fetchAll, setFetchAll] = useState({
		fetchState: false,
		fetchData: [],
	});

	const [searchButton, setSearchButton] = useState(false);
	const setSearchButtonToggle = () => {
		setSearchButton((prevState) => !prevState);
	};
	const getSearchButtonToggle = () => {
		return searchButton;
	};

	const [fetchAllCategory, setFetchAllCategory] = useState({
		fetchState: false,
		fetchData: [],
	});

	// user input search
	const setUserSearchString = (paramSearchString) => {
		setSearchString(paramSearchString);
	};
	const getUserSearchString = () => {
		return searchString;
	};

	// fetch all items
	const setFetchAllItems = (paramFetchState, paramFetchData) => {
		setFetchAll((prevState) => ({
			...prevState,
			fetchState: paramFetchState,
			fetchData: paramFetchData,
		}));
	};
	const getFetchAllItemsData = () => {
		if (fetchAll.fetchState === true) {
			return fetchAll.fetchData;
		}
	};
	const getFetchAllItemsState = () => {
		return fetchAll.fetchState;
	};

	// fetch all categories
	const setFetchCategoryAll = (paramFetchState, paramFetchData) => {
		setFetchAllCategory((prevState) => ({
			...prevState,
			fetchState: paramFetchState,
			fetchData: paramFetchData,
		}));
	};

	const getFetchCategoryAllData = () => {
		if (fetchAllCategory.fetchState === true) {
			return fetchAllCategory.fetchData;
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
			return categoriesArray;
		}
		return false;
	};

	return (
		<AppContext.Provider
			value={{
				setUserSearchString,
				getUserSearchString,
				setFetchAllItems,
				getFetchAllItemsData,
				getFetchAllItemsState,
				setSearchButtonToggle,
				getSearchButtonToggle,
				setFetchCategoryAll,
				getFetchCategoryAllData,
				getFetchCategoryAllState,
				getCategoriesArray,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
