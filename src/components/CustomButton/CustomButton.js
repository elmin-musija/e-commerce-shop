import "./CustomButton.css";


const CustomButton = (props) => {
  return (
    <button onClick={props.pr_onClickHandler} className={`custom-button ${props.pr_class}`}>
      {props.children}
    </button>
  );
};

export default CustomButton;
