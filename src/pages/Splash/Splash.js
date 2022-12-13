import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ReactComponent as SplashIcon } from "../../img/Icon.svg";
import { ReactComponent as SplashLogo } from "../../img/Logo.svg";
import "./Splash.css";

const Splash = (props) => {
	const [redirect, setRedirect] = useState(false);

	const redirectToOnboarding = () => {
		return <Navigate to="/onboarding" />;
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setRedirect(true);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="splash">
			<SplashIcon className="splash__icon" />
			<SplashLogo className="splash__logo" />
			<h2 className="splash__subheader">Your shopping solution</h2>
			{redirect && redirectToOnboarding()}
		</div>
	);
};

export default Splash;
