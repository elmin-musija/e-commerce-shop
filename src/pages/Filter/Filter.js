import FilterHeader from "../../components/FilterHeader/FilterHeader";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./Filter.css";

const Filter = (props) => {
  const { getCategoriesArray } = useContext(AppContext);

  const mapCategoryFilter = () => {
    const tmp = getCategoriesArray();
    console.log(tmp);
    if (tmp.length > 0) {
      return tmp.map((element) => {
        return (
          <button className="filter-grid-item">{element[0].category}</button>
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
          <button className="filter-grid-item ">0-20€</button>
          <button className="filter-grid-item ">20-50€</button>
          <button className="filter-grid-item ">50-100€</button>
          <button className="filter-grid-item ">über 100€</button>
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
    console.log(tmp);
    if (tmp.length > 0) {
      return tmp.map((element) => {
        return (
          <button className="filter-grid-item ">{element[0].brand}</button>
        );
      });
    }
  };

  const displayBrandFilter = () => {
    return <div className="filter-grid-container">{mapBrandFilter()}</div>;
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
      />
    </div>
  );
};

export default Filter;
