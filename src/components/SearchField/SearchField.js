import { useContext } from "react";
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
		}
	};

	const onFocusHandler = () => {
		setSearchButtonToggle();
	};

	const setFocusOnSearchfield = () => {
		if (getSearchButtonToggle()) {
			document.getElementById("input-search").focus();
		}
	};

	const showCurrentSearchString = () => {
		const inputSearch = document.getElementById("input-search");
		if (getUserSearchString() && inputSearch) {
			inputSearch.value = getUserSearchString();
		}
	};

	return (
		<div className="search-field">
			<SearchLogo className="search-field__logo" />
			{setFocusOnSearchfield()}
			{showCurrentSearchString()}
			<input
				className="search-field__search"
				type="text"
				name="input-search"
				id="input-search"
				placeholder="Search"
				required
				onKeyDown={inputOnKeyDownHandler}
				onChange={inputOnChangeHandler}
				onFocus={onFocusHandler}
			/>
		</div>
	);
};

export default SearchField;
