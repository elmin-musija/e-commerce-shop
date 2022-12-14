import { Link } from "react-router-dom";
import { ReactComponent as OnboardingInnerImage } from "../../img/onboarding-inner-image.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Onboarding.css";

const Onboarding = (props) => {
  return (
    <div className="onboarding">
      <OnboardingInnerImage className="onboarding__img" />
      <h2 className="onboarding__h2">Biggest Sell at Your Fingerprint</h2>
      <p className="onboarding__p">
        Find your best products from popular shop without any delay
      </p>
      <Link className="onboarding__link" to="/home">
        <CustomButton pr_class="onboarding__button">Get Started</CustomButton>
      </Link>
    </div>
  );
};

export default Onboarding;
