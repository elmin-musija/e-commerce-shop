import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import FilterHeader from "../../components/FilterHeader/FilterHeader";
import CustomFilterButtonPrice from "../../components/CustomFilterButtonPrice/CustomFilterButtonPrice";
import CustomFilterButtonBrand from "../../components/CustomFilterButtonBrand/CustomFilterButtonBrand";
import CustomFilterButtonCategory from "../../components/CustomFilterButtonCategory/CustomFilterButtonCategory";
import CustomButton from "../../components/CustomButton/CustomButton";
import AppContext from "../../context/AppContext";
import "./Filter.css";

const Filter = (props) => {
	const {
		getCategoriesArray,

		getUserSelectedFilterPrice,
		getUserSelectedFilterBrand,
		getUserSelectedFilterCategory,
		setUserSearchString,
		setUserSelectedCategory,
		resetUserSelectedFilterPrice,
		resetUserSelectedFilterBrand,
		resetUserSelectedFilterCategory,
	} = useContext(AppContext);

	const [filterButtonState, setFilterButtonState] = useState(false);

	const mapCategoryFilter = () => {
		const tmp = getCategoriesArray();
		if (tmp.length > 0) {
			return tmp.map((element, index) => {
				return (
					<CustomFilterButtonCategory key={index} className="filter-grid-item">
						{element[0].category}
					</CustomFilterButtonCategory>
				);
			});
		}
	};

	const displayCategoryFilter = () => {
		return <div className="filter-grid-container">{mapCategoryFilter()}</div>;
	};

	const displayCategoryHeader = () => {
		return (
			<section>
				<h4 className="filter-header-style filter-header-margin-categories">
					Categories
				</h4>
			</section>
		);
	};

	const displayPriceFilter = () => {
		return (
			<section>
				<h4 className="filter-header-style filter-header-margin">Price</h4>
				<div className="filter-grid-container">
					<CustomFilterButtonPrice
						pr_val={"0-20"}
						className="filter-grid-item "
					>
						0-20€
					</CustomFilterButtonPrice>
					<CustomFilterButtonPrice
						pr_val={"20-50"}
						className="filter-grid-item "
					>
						20-50€
					</CustomFilterButtonPrice>
					<CustomFilterButtonPrice
						pr_val={"50-100"}
						className="filter-grid-item "
					>
						50-100€
					</CustomFilterButtonPrice>
					<CustomFilterButtonPrice
						pr_val={"100-0"}
						className="filter-grid-item "
					>
						über 100€
					</CustomFilterButtonPrice>
				</div>
			</section>
		);
	};

	const displayBrandHeader = () => {
		return (
			<section>
				<h4 className="filter-header-style filter-header-margin">Brands</h4>
			</section>
		);
	};

	const mapBrandFilter = () => {
		const tmp = getCategoriesArray();
		if (tmp.length > 0) {
			return tmp.map((element, index) => {
				return (
					<CustomFilterButtonBrand key={index} className="filter-grid-item ">
						{element[0].brand}
					</CustomFilterButtonBrand>
				);
			});
		}
	};

	const displayBrandFilter = () => {
		return <div className="filter-grid-container">{mapBrandFilter()}</div>;
	};

	const onClickHandler = () => {
		setFilterButtonState((prevState) => !prevState);
	};

	useEffect(() => {
		if (filterButtonState === true) {
			setUserSearchString("");
			setUserSelectedCategory("");
			// resetUserSelectedFilterCategory();
			// resetUserSelectedFilterPrice();
			// resetUserSelectedFilterBrand();
		}
	}, [
		filterButtonState,
		resetUserSelectedFilterPrice,
		resetUserSelectedFilterBrand,
		resetUserSelectedFilterCategory,
		setUserSearchString,
		setUserSelectedCategory,
	]);

	const redirectToProductDetails = () => {
		if (filterButtonState === true) {
			if (
				String(getUserSelectedFilterCategory()).length === 0 &&
				String(getUserSelectedFilterPrice()).length === 0 &&
				String(getUserSelectedFilterBrand()).length === 0
			) {
				resetUserSelectedFilterCategory();
				resetUserSelectedFilterPrice();
				resetUserSelectedFilterBrand();
				return <Navigate to={`/productlist/filter/all`} />;
			} else {
				return <Navigate to={`/productlist/filter/filter`} />;
			}
		}
	};

	return (
		<div className="filter">
			<FilterHeader name="Filters" />
			{displayCategoryHeader()}
			{displayCategoryFilter()}
			{displayPriceFilter()}
			{displayBrandHeader()}
			{displayBrandFilter()}
			<CustomButton
				children="Apply Filter"
				pr_class="filter-custom-button filter-header-style"
				pr_onClickHandler={onClickHandler}
			/>
			{redirectToProductDetails()}
		</div>
	);
};

export default Filter;
