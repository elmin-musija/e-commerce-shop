import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import "../../pages/Filter/Filter.css";
import "./CustomFilterButton.css";

const CustomFilterButton = (props) => {
	const { setUserSelectedFilter, removeUserSelectedFilter } =
		useContext(AppContext);

	const [filterButtonState, setFilterButtonState] = useState(false);

	let tmpClass = "";
	if (filterButtonState) {
		tmpClass += "custom-filter-button clicked ";
	} else {
		tmpClass += "custom-filter-button ";
	}
	tmpClass += props.className !== "" ? props.className : "";

	const onClickHandler = () => {
		setFilterButtonState((prevState) => !prevState);
		if (filterButtonState === false) {
			setUserSelectedFilter(props.children);
			console.log(`add ${props.children}`);
		} else if (filterButtonState === true) {
			removeUserSelectedFilter(props.children);
			console.log(`remove ${props.children}`);
		}
	};

	return (
		<button className={tmpClass} onClick={onClickHandler}>
			{props.children}
		</button>
	);
};

export default CustomFilterButton;
