import "./CustomButton.css";
const CustomButton = (props) => {
	return (
		<button className={`custom-button ${props.pr_class}`}>
			{props.children}
		</button>
	);
};

export default CustomButton;
