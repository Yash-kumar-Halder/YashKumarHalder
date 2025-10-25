import HomePage from "./home/home";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import TechStack from "./tech/page";
import Contact from "./contact/page";
import LenisWrapper from "@/components/MyComponent/LenisWrapper";

export default function MainPage() {
  return (
    <LenisWrapper>
    {/* <> */}
      <div className="scroll-indicator" />
      <main className="w-full h-full">
        <HomePage />
        <TechStack />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    {/* </> */}
    </LenisWrapper>
  );
}
