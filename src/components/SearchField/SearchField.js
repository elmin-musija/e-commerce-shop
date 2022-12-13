import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { ReactComponent as SearchLogo } from "../../img/Search.svg";
import "./SearchField.css";


const SearchField = (props) => {

	const { setUserSearchString, getSearchButtonToggle } = useContext(AppContext);

	const inputOnChangeHandler = (event) => {
		if (event.key === "Enter") {
			setUserSearchString(event.target.value);
		}
	};
	const setFocusOnSearchfield = () => {
		if (getSearchButtonToggle()) {
			document.getElementById("input-search").focus()
		}

	}
	return (
		<div className="search-field">
			<SearchLogo className="search-field__logo" />
			{setFocusOnSearchfield()}
			<input
				className="search-field__search"
				type="text"
				name="input-search"
				id="input-search"
				placeholder="Search"
				required
				onKeyDown={inputOnChangeHandler}
			/>
		</div>
	);
};

export default SearchField;
