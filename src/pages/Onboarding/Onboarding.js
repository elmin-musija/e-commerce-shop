import "./Onboarding.css";
import { ReactComponent as OnboardingImage } from '../../img/Onboarding-img.svg'
import { ReactComponent as OnboardingInnerImage } from '../../img/onboarding-inner-image.svg'

const Onboarding = (props) => {
	return (
		<div className="onboarding">
			<OnboardingInnerImage className="onboarding__img"/>
			<h2 className="onboarding__h2">Biggest Sell at Your Fingerprint</h2>
			<p className="onboarding__p">Find your best products from popular shop wihout any delay</p>
		</div>
	);
};

export default Onboarding;
