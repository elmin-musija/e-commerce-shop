import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Navigate } from "react-router-dom";
import { ReactComponent as SplashIcon } from "../../img/Icon.svg";
import { ReactComponent as SplashLogo } from "../../img/Logo.svg";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import "./Splash.css";

const Splash = (props) => {
  const [redirect, setRedirect] = useState(false);
  const { setFetchAllItems } = useContext(AppContext);

  const fetchFunctionAllItems = () => {
    fetch("https://dummyjson.com/products/?limit=30")
      .then((response) => response.json())
      .then((allItems) => {
        setFetchAllItems(true, allItems.products);
      });
  };

  useEffect(fetchFunctionAllItems, []);

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
      <SplashIcon className="splash__icon e-shop-animation-one" />
      <SplashLogo className="splash__logo e-shop-animation-two" />
      <h2 className="splash__subheader e-shop-animation-three">
        Your shopping solution
      </h2>
      {redirect && redirectToOnboarding()}
      <LoadingAnimation />
    </div>
  );
};

export default Splash;
