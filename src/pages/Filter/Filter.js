import { useContext } from "react";
import FilterHeader from "../../components/FilterHeader/FilterHeader";
import CustomFilterButton from "../../components/CustomFilterButton/CustomFilterButton";
import CustomButton from "../../components/CustomButton/CustomButton";
import AppContext from "../../context/AppContext";
import "./Filter.css";

const Filter = (props) => {
	const { getCategoriesArray } = useContext(AppContext);

	const mapCategoryFilter = () => {
		const tmp = getCategoriesArray();
		if (tmp.length > 0) {
			return tmp.map((element, index) => {
				return (
					<CustomFilterButton key={index} className="filter-grid-item">
						{element[0].category}
					</CustomFilterButton>
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
					<CustomFilterButton className="filter-grid-item ">
						0-20€
					</CustomFilterButton>
					<CustomFilterButton className="filter-grid-item ">
						20-50€
					</CustomFilterButton>
					<CustomFilterButton className="filter-grid-item ">
						50-100€
					</CustomFilterButton>
					<CustomFilterButton className="filter-grid-item ">
						über 100€
					</CustomFilterButton>
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
					<CustomFilterButton key={index} className="filter-grid-item ">
						{element[0].brand}
					</CustomFilterButton>
				);
			});
		}
	};

	const displayBrandFilter = () => {
		return <div className="filter-grid-container">{mapBrandFilter()}</div>;
	};

	const onClickHandler = () => {
		console.log("Apply Filter");
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
		</div>
	);
};

export default Filter;
