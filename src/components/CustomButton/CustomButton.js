import "./CustomButton.css";
const CustomButton = (props) => {
	return (
		<div className={`custom-button ${props.pr_class}`}>
			<button className="custom-button__button">{props.children}</button>
		</div>
	);
};

export default CustomButton;
