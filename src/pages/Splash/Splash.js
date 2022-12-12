import "./Splash.css";
import { ReactComponent as SplashIcon } from "../../img/Icon.svg";
import { ReactComponent as SplashLogo } from "../../img/Logo.svg";

const Splash = (props) => {
  return (
    <div className="splash">
      <SplashIcon className="splash__icon" />
      <SplashLogo className="splash__logo" />
      <h2 className="splash__subheader">Your shopping solution</h2>
    </div>
  );
};

export default Splash;
