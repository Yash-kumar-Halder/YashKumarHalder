import HomePage from "./home/home";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import TechStack from "./tech/page";
import Stats from "./stats/page";

const MainPage = () => {
	return (
		<main className="w-full h-full">
			<HomePage />
			<TechStack />
			<AboutMe />
			<Projects />
			<Stats />
		</main>
	);
};

export default MainPage;
