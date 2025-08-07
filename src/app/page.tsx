import NavigationBar from "@/components/MyComponent/navigation-bar";
import HomePage from "./home/home";
import TechStack from "@/components/MyComponent/Tech-Stack";

const MainPage = () => {
	return (
		<main className="w-full h-full">
			<NavigationBar />
			<HomePage />
			<TechStack />
		</main>
	);
};

export default MainPage;
