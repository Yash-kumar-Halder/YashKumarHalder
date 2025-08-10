import HomePage from "./home/home";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import TechStack from "./tech/page";

const MainPage = () => {
	return (
		<main className="w-full h-full">
			<HomePage />
			<TechStack />
			<AboutMe />
			<Projects />
		</main>
	);
};

export default MainPage;
