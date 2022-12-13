import SearchField from "../SearchField/SearchField";
import FilterButton from "../FilterButton/FilterButton";
import "./SearchBar.css";

const SearchBar = (props) => {

	return (
		<div className="search-bar">
			<SearchField></SearchField>
			<FilterButton></FilterButton>
		</div>
	);
};

export default SearchBar;
