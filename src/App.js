import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Splash from "./pages/Splash/Splash";
import Onboarding from "./pages/Onboarding/Onboarding";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
	return (
	<div className="App">
		<div className="tablet">
			<div className="content">
			<AppContextProvider>
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
							path="/productlist/search/:search"
							element={
								<PageWrapper>
									<ProductList />
								</PageWrapper>
							}
						></Route>
						<Route
							path="/productlist/category/:category"
							element={
								<PageWrapper>
									<ProductList />
								</PageWrapper>
							}
						></Route>
						<Route
							path="/productdetails/:id"
							element={
								<PageWrapper>
									<ProductDetails />
								</PageWrapper>
							}
						></Route>
						<Route
							path="/cart"
							element={
								<PageWrapper>
									<Cart />
								</PageWrapper>
							}
						></Route>
					</Routes>
				</BrowserRouter>
			</AppContextProvider>
			</div>
		</div>
	</div>
	);
}

export default App;
