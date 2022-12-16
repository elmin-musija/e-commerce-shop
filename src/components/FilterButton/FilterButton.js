import { Link } from "react-router-dom";
import { ReactComponent as FilterLogo } from "../../img/Filter.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./FilterButton.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const FilterButton = (props) => {
	const {
		resetUserSelectedFilterCategory,
		resetUserSelectedFilterPrice,
		resetUserSelectedFilterBrand,
	} = useContext(AppContext);

	const onClickHandler = () => {
		resetUserSelectedFilterCategory();
		resetUserSelectedFilterPrice();
		resetUserSelectedFilterBrand();
	};

	return (
		<div className="filter-button">
			<Link onClick={onClickHandler} to="/filter">
				<CustomButton pr_class="filter-button__button">
					<FilterLogo className="filter-button__logo" />
				</CustomButton>
			</Link>
		</div>
	);
};

export default FilterButton;
