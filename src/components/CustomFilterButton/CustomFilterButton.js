import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import "../../pages/Filter/Filter.css";
import "./CustomFilterButton.css";

const CustomFilterButton = (props) => {
	const {
		setUserSelectedFilter,
		checkUserSelectedFilter,
		removeUserSelectedFilter,
	} = useContext(AppContext);

	const [filterButtonState, setFilterButtonState] = useState(false);

	let tmpClass = "";
	if (filterButtonState) {
		tmpClass += "custom-filter-button clicked ";
	} else {
		tmpClass += "custom-filter-button ";
	}
	tmpClass += props.className !== "" ? props.className : "";

	const onClickHandler = () => {
		if (
			filterButtonState === false &&
			checkUserSelectedFilter(props.children) === 0
		) {
			setUserSelectedFilter(props.children);
			console.log(localStorage.selectedFilter);
		} else if (
			filterButtonState === true &&
			checkUserSelectedFilter(props.children) > 0
		) {
			removeUserSelectedFilter(props.children);
			console.log(localStorage.selectedFilter);
		}
		setFilterButtonState((prevState) => !prevState);
	};

	return (
		<button className={tmpClass} onClick={onClickHandler}>
			{props.children}
		</button>
	);
};

export default CustomFilterButton;
