import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = (props) => {
	return (
		<div className="home">
			<h1 className="home__h1">Find your favourite Product</h1>
			<SearchBar />
			<Footer />
		</div>
	);
};

export default Home;
