import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Onboarding from "./pages/Onboarding/Onboarding";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PageWrapper>
								<Splash />
							</PageWrapper>
						}
					></Route>
					<Route
						path="/onboarding"
						element={
							<PageWrapper>
								<Onboarding />
							</PageWrapper>
						}
					></Route>
					<Route
						path="/home"
						element={
							<PageWrapper>
								<Home />
							</PageWrapper>
						}
					></Route>
					<Route
						path="/filter"
						element={
							<PageWrapper>
								<Filter />
							</PageWrapper>
						}
					></Route>
					<Route
						path="/productlist"
						element={
							<PageWrapper>
								<ProductList />
							</PageWrapper>
						}
					></Route>
					<Route
						path="/productdetails"
						element={
							<PageWrapper>
								<ProductDetails />
							</PageWrapper>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;