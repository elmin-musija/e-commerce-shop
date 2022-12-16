import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import "./CustomFilterButtonBrand.css";

const CustomFilterButtonBrand = (props) => {
	const {
		setUserSelectedFilterBrand,
		checkUserSelectedFilterBrand,
		removeUserSelectedFilterBrand,
	} = useContext(AppContext);

	const [filterButtonStateBrand, setFilterButtonStateBrand] = useState(false);

	let tmpClass = "";
	if (filterButtonStateBrand) {
		tmpClass += "custom-filter-button clicked ";
	} else {
		tmpClass += "custom-filter-button ";
	}

	const onClickHandler = () => {
		if (
			filterButtonStateBrand === false &&
			checkUserSelectedFilterBrand(props.children) === 0
		) {
			setUserSelectedFilterBrand(props.children);
		} else if (
			filterButtonStateBrand === true &&
			checkUserSelectedFilterBrand(props.children) > 0
		) {
			removeUserSelectedFilterBrand(props.children);
		}
		setFilterButtonStateBrand((prevState) => !prevState);
	};

	return (
		<button className={tmpClass} onClick={onClickHandler}>
			{props.children}
		</button>
	);
};

export default CustomFilterButtonBrand;
