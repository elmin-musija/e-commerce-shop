import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Onboarding from "./pages/Onboarding/Onboarding";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Splash />}></Route>
					<Route path="/onboarding" element={<Onboarding />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/filter" element={<Filter />}></Route>
					<Route path="/productlist" element={<ProductList />}></Route>
					<Route path="/productdetails" element={<ProductDetails />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
