import "./CategoryThumbnail.css";

const CategoryThumbnail = (props) => {
  return (
    <div className="category-thumbnail">
      <div>
        <img
          className="category-thumbnail__image"
          src={props.pr_image}
          alt={props.pr_alt}
        />
        <p className="category-subhead">{props.pr_category}Category 1</p>
      </div>
      {/* <div>
        <img
          className="category-thumbnail__image"
          src={props.pr_image}
          alt={props.pr_alt}
        />
        <p className="category-subhead">{props.pr_category}Category 1</p>
      </div>
      <div>
        <img
          className="category-thumbnail__image"
          src={props.pr_image}
          alt={props.pr_alt}
        />
        <p className="category-subhead">{props.pr_category}Category 1</p>
      </div>
      <div>
        <img
          className="category-thumbnail__image"
          src={props.pr_image}
          alt={props.pr_alt}
        />
        <p className="category-subhead">{props.pr_category}Category 1</p>
      </div>
      <div>
        <img
          className="category-thumbnail__image"
          src={props.pr_image}
          alt={props.pr_alt}
        />
        <p className="category-subhead">{props.pr_category}Category 1</p>
      </div> */}
    </div>
  );
};

export default CategoryThumbnail;
