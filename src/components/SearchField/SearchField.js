import { ReactComponent as SearchLogo } from "../../img/Search.svg";
import "./SearchField.css";
const SearchField = (props) => {
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
			/>
		</div>
	);
};

export default SearchField;
