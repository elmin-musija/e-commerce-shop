import "./FilterHeader.css";
import { ReactComponent as FilterLeftArrow } from "../../img/LeftArrow.svg";
import { Link } from "react-router-dom";

const FilterHeader = () => {
  return (
    <div className="filter__container">
      <Link to="/home">
        <FilterLeftArrow className="filter-left-arrow" />
        {/* später Semantik richtig bestimmen */}
      </Link>
      <h3 className="filter__h3">Filters</h3>
      <div className="filter__box"></div>
    </div>
  );
};

export default FilterHeader;
