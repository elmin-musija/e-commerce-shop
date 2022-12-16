import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import "./CustomFilterButtonPrice.css";

const CustomFilterButtonPrice = (props) => {
	const {
		setUserSelectedFilterPrice,
		checkUserSelectedFilterPrice,
		removeUserSelectedFilterPrice,
	} = useContext(AppContext);

	const [filterButtonStatePrice, setFilterButtonStatePrice] = useState(false);

	let tmpClass = "";
	if (filterButtonStatePrice) {
		tmpClass += "custom-filter-button clicked ";
	} else {
		tmpClass += "custom-filter-button ";
	}

	const onClickHandler = () => {
		if (
			filterButtonStatePrice === false &&
			checkUserSelectedFilterPrice(props.pr_val) === 0
		) {
			setUserSelectedFilterPrice(props.pr_val);
		} else if (
			filterButtonStatePrice === true &&
			checkUserSelectedFilterPrice(props.pr_val) > 0
		) {
			removeUserSelectedFilterPrice(props.pr_val);
		}
		setFilterButtonStatePrice((prevState) => !prevState);
	};

	return (
		<button className={tmpClass} onClick={onClickHandler}>
			{props.children}
		</button>
	);
};

export default CustomFilterButtonPrice;
