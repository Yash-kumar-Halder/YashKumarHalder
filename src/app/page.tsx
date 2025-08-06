import NavigationBar from "@/components/MyComponent/navigation-bar";
import HomePage from "./home/home";

const MainPage = () => {
	return (
			<main className="w-full h-full">
				<NavigationBar />
				<HomePage />
			</main>
	);
};

export default MainPage;
