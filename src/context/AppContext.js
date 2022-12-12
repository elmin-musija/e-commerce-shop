import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [searchString, setSearchString] = useState([]);

	const setUserSearchString = (paramSearchString) => {
		setSearchString(paramSearchString);
	};
	const getUserSearchString = () => {
		return searchString;
	};

	return (
		<AppContext.Provider
			value={{ searchString, setUserSearchString, getUserSearchString }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
