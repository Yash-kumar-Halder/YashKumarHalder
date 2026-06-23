import Image from "next/image";
import LogoImg from "../../../public/img-3.jpg";
import HorizontalScale from "./horizontal-scale";
import {
    Code2,
    GitBranchIcon,
    Github,
    GithubIcon,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Verified,
    X,
} from "lucide-react";
import {
    IconBrandCss3,
    IconBrandDocker,
    IconBrandGit,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandRadixUi,
    IconBrandReactNative,
    IconBrandTailwind,
    IconBrandVercel,
    IconBrandVscode,
} from "@tabler/icons-react";
import { RiGithubFill, RiJavaFill, RiNodejsFill } from "react-icons/ri";
import Academic from "./academic";
import TechStack from "@/app/tech/page";

const HomeHero = () => {
    return (
        <div className="w-full flex flex-col justify-center max-w-5xl border-x">
            <div className="flex items-end gap-5 border-y mb-5 mt-20">
                <div className="border-r">
                    <Image
                        src={LogoImg}
                        alt="Profile Photo"
                        width={180}
                        height={180}
                        className="rounded-full"
                    />
                </div>
                <div className="mb-4 w-full">
                    <div className="flex gap-1.5 items-center border-y w-full">
                        <h1 className="text-2xl">YASH KUMAR HALDER </h1>
                        <Verified size={26} fill="#aaf" stroke="black" />{" "}
                    </div>
                    <h3 className="text-muted-foreground">Software Enginner</h3>
                </div>
            </div>
            <HorizontalScale className="relative" />
            <div className="grid grid-cols-[5fr_6fr] border-b">
                <div className="space-y-4 h-fit p-5 border-r border-dashed">
                    <div className="flex items-center gap-3">
                        <Code2
                            className="bg-neutral-800/70 p-1 rounded-md border text-neutral-300"
                            size={26}
                        />
                        <h4 className="text-neutral-300">
                            Intern at Thoughtworks
                        </h4>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone
                            className="bg-neutral-800/70 p-1.5 rounded-md border text-neutral-300"
                            size={26}
                        />
                        <h4 className="text-neutral-300">+91 8388893667</h4>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail
                            className="bg-neutral-800/70 p-1.5 rounded-md border text-neutral-300"
                            size={26}
                        />
                        <h4 className="text-neutral-300">
                            yashkumarhalder@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="space-y-4 p-5 content-end h-full">
                    <div className="flex items-center gap-3">
                        <GraduationCap
                            className="bg-neutral-800/70 p-1 rounded-md border text-neutral-300"
                            size={26}
                        />
                        <h4 className="text-neutral-300">
                            Diploma in Computer Science & Technology
                        </h4>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin
                            className="bg-neutral-800/70 p-1 rounded-md border text-neutral-300"
                            size={26}
                        />
                        <h4 className="text-neutral-300">
                            Mankhand, Diamond Harbour, West Bengal, India.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-2 border-b">
                <Linkedin
                    className="bg-neutral-800/70 p-1 rounded-md border text-neutral-300"
                    size={30}
                />
                <Github
                    className="bg-neutral-800/70 p-1 rounded-md border text-neutral-300"
                    size={30}
                />
                <X
                    className="bg-neutral-800/70 p-1 rounded-md border text-neutral-300"
                    size={30}
                />
            </div>
            <HorizontalScale className="relative" />
            <TechStack />
            <Academic />
        </div>
    );
};

export default HomeHero;
