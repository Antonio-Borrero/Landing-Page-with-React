import React from "react";

//include images into your bundle
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Cards from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container-sm">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;