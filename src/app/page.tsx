import NavigationBar from "@/components/MyComponent/navigation-bar";
import HomePage from "./home/home";
import TechStack from "@/components/MyComponent/Tech-Stack";
// import AboutMe from "@/components/MyComponent/about-me";

const MainPage = () => {
	return (
		<main className="w-full h-full">
			<NavigationBar />
			<HomePage />
			<TechStack />
			{/* <AboutMe /> */}
		</main>
	);
};

export default MainPage;
