import { useState } from "react";
import "../../pages/Filter/Filter.css";
import "./CustomFilterButton.css";

const CustomFilterButton = (props) => {
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
	};

	return (
		<button className={tmpClass} onClick={onClickHandler}>
			{props.children}
		</button>
	);
};

export default CustomFilterButton;
