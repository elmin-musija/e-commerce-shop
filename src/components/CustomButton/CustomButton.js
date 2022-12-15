import "./CustomButton.css";


const CustomButton = (props) => {
	return (
		<button
			className={`custom-button ${props.pr_class}`}
			onClick={props.pr_onClickHandler}
		>
			{props.children}
		</button>
	);
};

export default CustomButton;
