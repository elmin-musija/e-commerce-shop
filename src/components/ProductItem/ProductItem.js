import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="product-item">
      <img src={props.pr_image} alt={props.pr_alt} />
    </div>
  );
};

export default ProductItem;
