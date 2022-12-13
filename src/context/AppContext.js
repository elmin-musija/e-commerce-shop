import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [searchString, setSearchString] = useState("");
	const [fetchAll, setFetchAll] = useState({
		fetchState: false,
		fetchData: [],
	});

	const setUserSearchString = (paramSearchString) => {
		setSearchString(paramSearchString);
	};
	const getUserSearchString = () => {
		return searchString;
	};

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

	return (
		<AppContext.Provider
			value={{
				setUserSearchString,
				getUserSearchString,
				setFetchAllItems,
				getFetchAllItemsData,
				getFetchAllItemsState,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
