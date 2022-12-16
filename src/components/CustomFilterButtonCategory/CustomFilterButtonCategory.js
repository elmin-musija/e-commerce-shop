import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import "./CustomFilterButtonCategory.css";

const CustomFilterButtonCategory = (props) => {
	const {
		setUserSelectedFilterCategory,
		checkUserSelectedFilterCategory,
		removeUserSelectedFilterCategory,
	} = useContext(AppContext);

	const [filterButtonStateCategory, setFilterButtonStateCategory] =
		useState(false);

	let tmpClass = "";
	if (filterButtonStateCategory) {
		tmpClass += "custom-filter-button clicked ";
	} else {
		tmpClass += "custom-filter-button ";
	}

	const onClickHandler = () => {
		if (
			filterButtonStateCategory === false &&
			checkUserSelectedFilterCategory(props.children) === 0
		) {
			setUserSelectedFilterCategory(props.children);
		} else if (
			filterButtonStateCategory === true &&
			checkUserSelectedFilterCategory(props.children) > 0
		) {
			removeUserSelectedFilterCategory(props.children);
		}
		setFilterButtonStateCategory((prevState) => !prevState);
	};

	return (
		<button className={tmpClass} onClick={onClickHandler}>
			{props.children}
		</button>
	);
};

export default CustomFilterButtonCategory;
