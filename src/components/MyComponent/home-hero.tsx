import Image from "next/image";
import LogoImg from "../../../public/img-3.jpg";
import HorizontalScale from "./horizontal-scale";
import {
    Code2,
    Github,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Verified,
    X,
} from "lucide-react";
import { IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandRadixUi, IconBrandReactNative, IconBrandTailwind, IconLetterCSmall } from "@tabler/icons-react";
import { RiJavaFill, RiNodejsFill } from "react-icons/ri";
import ShadCnIcon from "../../../public/shadCn.png";

const HomeHero = () => {
    return (
        <div className="w-full flex flex-col justify-center max-w-5xl border-x">
            <div className="flex items-end gap-5 border-t">
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
            <div className="flex items-center gap-3 p-5 border-b">
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
            <div className="py-5">
                <h1 className="px-5 text-2xl border-y text-neutral-100 py-2">
                    Tech Stack
                </h1>
                <div className="w-full ">
                    <div className="grid grid-cols-[1fr_3fr] border-b">
                        <div className="border-r px-5">
                            <h4 className="py-3 text-muted-foreground">
                                Languages
                            </h4>
                        </div>
                        <div className="flex gap-3 px-5 py-3">
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
                                    <path d="M9 12h4" />
                                    <path d="M11 12v6" />
                                    <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2" />
                                </svg>
                                <span className="text-sm text-neutral-200 font-light">
                                    TypeScript
                                </span>
                            </div>

                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <IconBrandJavascript stroke={1.5} size={20} />
                                <span className="text-sm text-neutral-200 font-light">
                                    JavaScript
                                </span>
                            </div>
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <RiJavaFill size={18} />
                                <span className="text-sm text-neutral-200 font-light">
                                    Java
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_3fr] border-b">
                        <div className="border-r px-5">
                            <h4 className="py-3 text-muted-foreground">
                                Frontend
                            </h4>
                        </div>
                        <div className="flex gap-3 px-5 py-3">
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <IconBrandReactNative stroke={1.5} size={20} />
                                <span className="text-sm text-neutral-200 font-light">
                                    React
                                </span>
                            </div>

                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <IconBrandNextjs stroke={1.5} size={20} />
                                <span className="text-sm text-neutral-200 font-light">
                                    Next.js
                                </span>
                            </div>
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <IconBrandTailwind stroke={1.5} size={20} />
                                <span className="text-sm text-neutral-200 font-light">
                                    Tailwind
                                </span>
                            </div>
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <Image
                                    src={ShadCnIcon}
                                    alt="shadCn icon"
                                    width={15}
                                    height={15}
                                />
                                <span className="text-sm text-neutral-200 font-light">
                                    ShadCn
                                </span>
                            </div>
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <IconBrandRadixUi stroke={1.5} size={20} />
                                <span className="text-sm text-neutral-200 font-light">
                                    Radix UI
                                </span>
                            </div>
                            <div className="flex gap-1.5 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-300">
                                <svg width="12" height="16" viewBox="0 0 17 24">
                                    <path
                                        fill="currentColor"
                                        d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z"
                                    ></path>
                                </svg>
                                <span className="text-sm text-neutral-200 font-light">
                                    Base UI
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_3fr] border-b">
                        <div className="border-r px-5">
                            <h4 className="py-3 text-muted-foreground">
                                Backend
                            </h4>
                        </div>
                        <div className="flex gap-3 px-5 py-3">
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <RiNodejsFill size={18} />
                                <span className="text-sm text-neutral-200 font-light">
                                    Node.js
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_3fr] border-b">
                        <div className="border-r px-5">
                            <h4 className="py-3 text-muted-foreground">
                                Database
                            </h4>
                        </div>
                        <div className="flex gap-3 px-5 py-3">
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                <IconBrandMongodb stroke={1.5} size={18} fill="#888" />
                                <span className="text-sm text-neutral-200 font-light">
                                    MongoDB
                                </span>
                            </div>
                            <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                                {/* <PostgreSQ stroke={1.5} size={18} fill="#888" /> */}
                                <span className="text-sm text-neutral-200 font-light">
                                    PostgreSQL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
