import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = (props) => {
	return (
		<div className="home">
			<h1>Home</h1>
			<SearchBar />
			<Footer />
		</div>
	);
};

export default Home;
