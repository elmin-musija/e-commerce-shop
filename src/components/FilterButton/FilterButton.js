import { Link } from "react-router-dom";
import { ReactComponent as FilterLogo } from "../../img/Filter.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./FilterButton.css";

const FilterButton = (props) => {
	return (
		<div className="filter-button">
			<Link to="/filter">
				<CustomButton pr_class="filter-button__button">
					<FilterLogo className="filter-button__logo" />
				</CustomButton>
			</Link>
		</div>
	);
};

export default FilterButton;
