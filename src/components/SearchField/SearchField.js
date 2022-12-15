import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { ReactComponent as SearchLogo } from "../../img/Search.svg";
import "./SearchField.css";

const SearchField = (props) => {
	const {
		setUserSearchString,
		getUserSearchString,
		setUserSearchButtonClicked,
		getSearchButtonToggle,
		setSearchButtonToggle,
		resetUserSearchButtonClicked,
	} = useContext(AppContext);

	const inputOnKeyDownHandler = (event) => {
		if (event.key === "Enter") {
			setUserSearchString(event.target.value);
			setUserSearchButtonClicked();
		}
	};

	const inputOnChangeHandler = (event) => {
		if (event.target.value === "") {
			setUserSearchString("");
		} else {
			setUserSearchString(event.target.value);
			resetUserSearchButtonClicked();
		}
	};

	useEffect(() => {
		if (getSearchButtonToggle()) {
			const inputSearch = document.getElementById("input-search");
			if (inputSearch) {
				inputSearch.focus();
			}
		}
	}, [getSearchButtonToggle]);

	useEffect(() => {
		const inputSearch = document.getElementById("input-search");
		if (getUserSearchString() && inputSearch) {
			inputSearch.value = getUserSearchString();
		}
	}, [getUserSearchString]);

	return (
		<div className="search-field">
			<SearchLogo className="search-field__logo" />
			<input
				className="search-field__search"
				type="text"
				name="input-search"
				id="input-search"
				placeholder="Search"
				required
				onKeyDown={inputOnKeyDownHandler}
				onChange={inputOnChangeHandler}
				onFocus={setSearchButtonToggle}
			/>
		</div>
	);
};

export default SearchField;
