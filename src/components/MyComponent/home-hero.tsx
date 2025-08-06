"use client";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";

const russo_one = Russo_One({
	subsets: ["latin"],
	weight: "400",
});

const HomeHero = () => {
	const pathRef1 = useRef<SVGPathElement>(null);
	const pathRef2 = useRef<SVGPathElement>(null);

	useEffect(() => {
		const animatePath = (path: SVGPathElement | null) => {
			if (!path) return;
			const length = path.getTotalLength();
			path.style.strokeDasharray = length.toString();
			path.style.strokeDashoffset = length.toString();
			setTimeout(() => {
				path.style.transition = "stroke-dashoffset 4s ease-in-out";
				path.style.strokeDashoffset = "0";
			}, 1);
		};

		animatePath(pathRef1.current);
		animatePath(pathRef2.current);
	}, []);

	return (
		<>
			<div className="md:min-h-screen lg:pl-28 flex items-end md:items-center justify-center py-6">
				<div className="md:h-full flex flex-col items-center md:items-start justify-end md:justify-center">
					<h1
						className={`${russo_one.className} text-[5vmin] lg:text-[7vmin] leading-8 md:leading-12`}
					>
						Hi, <span className="text-red-800">I Am</span>
					</h1>
					<h1
						className={`${russo_one.className} text-[9vmin] lg:text-[9vmin] leading-[7.5vmin] 
              bg-gradient-to-r from-purple-700 to-red-700 bg-clip-text text-transparent text-center md:text-start`}
					>
						YASH KUMAR HALDER
					</h1>
					<h1
						className={`${russo_one.className} text-[4vmin] lg:text-[4vmin] text-muted-foreground leading-[4vmin] mt-3 md:mt-0 `}
					>
						Full Stack Developer || MERN Stack
					</h1>
					<div className="w-[90%] md:w-[50%] h-12 md:mt-4 rounded-sm flex items-center justify-center md:justify-around gap-2 md:gap-3 ">
						<div className="flex items-center gap-1 bg-gray-600/20 border border-transparent hover:border-gray-500 px-3 md:px-4 py-0.5 md:py-2 rounded-sm hover:scale-105 cursor-pointer transition-all duration-150">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 48 48"
								className="h-5 w-fit md:h-6"
							>
								<path
									fill="#0078d4"
									d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
								></path>
								<path
									d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
									opacity=".05"
								></path>
								<path
									d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
									opacity=".07"
								></path>
								<path
									fill="#fff"
									d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
								></path>
							</svg>
							<h3 className="text-[10px] md:text-base">
								LINKEDIN
							</h3>
						</div>
						<div className="flex items-center gap-1 bg-gray-600/20 border border-transparent hover:border-gray-500 px-3 md:px-4 py-0.5 md:py-2 rounded-sm hover:scale-105 cursor-pointer transition-all duration-150">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 64 64"
								className=" dark:fill-white h-5 md:h-6 w-fit"
							>
								<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
							</svg>
							<h3 className="text-[10px] md:text-base">GITHUB</h3>
						</div>
						<div className="flex items-center gap-1 md:gap-3 bg-gray-600/20 border border-transparent hover:border-gray-500 px-3 md:px-4 py-1 md:py-2 rounded-sm hover:scale-105 cursor-pointer transition-all duration-150">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								enableBackground="new 0 0 24 24"
								viewBox="0 0 24 24"
								id="leetcode"
								className="h-4 w-fit md:h-6 "
							>
								<path
									fill="#B3B1B0"
									d="M22,14.355c0-0.742-0.564-1.345-1.26-1.345H10.676c-0.696,0-1.26,0.604-1.26,1.345c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355z"
								></path>
								<path
									fill="#9C9A99"
									d="M22,14.355H9.416l0,0c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355L22,14.355z"
								></path>
								<path
									fill="#C98F1B"
									d="M4.781,14.355H4.735c0.015,0.736,0.315,1.474,0.897,2.068c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.31,0.449-0.71,0.729-1.271,0.729c-0.02,0-0.041,0-0.062-0.001c-0.2-0.007-0.364-0.087-0.53-0.181c-0.035-0.02-0.07-0.04-0.104-0.062C8.963,23.593,10.221,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.272-0.275-0.627-0.413-0.978-0.413c-0.332,0-0.659,0.124-0.906,0.374l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363C5.024,15.716,4.79,15.052,4.781,14.355L4.781,14.355z"
								></path>
								<path
									fill="#060605"
									d="M4.735,14.355H1.918c0.006,1.485,0.595,2.945,1.739,4.101c1.324,1.336,2.657,2.663,3.984,3.996c0.113,0.114,0.236,0.215,0.37,0.3c0.034,0.021,0.068,0.042,0.104,0.062c0.166,0.094,0.33,0.174,0.53,0.181c0.021,0.001,0.041,0.001,0.062,0.001c0.561,0,0.961-0.28,1.271-0.729c0.291-0.421,0.286-1.368-0.182-1.671l-0.204-0.198c-1.321-1.324-2.652-2.638-3.96-3.974C5.05,15.83,4.75,15.091,4.735,14.355L4.735,14.355z"
								></path>
								<path
									fill="#E7A41F"
									d="M3.483,18.187l4.312,4.361C8.767,23.527,10.113,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.53-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363c-0.463-0.468-0.697-1.15-0.697-1.863c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635c-0.648-0.646-1.471-1.116-2.392-1.33l-0.033-0.006l2.447-2.504c0.512-0.514,0.494-1.366-0.037-1.901c-0.53-0.535-1.376-0.553-1.887-0.038L3.483,10.476C2.509,11.458,2,12.814,2,14.312S2.509,17.206,3.483,18.187L3.483,18.187z"
								></path>
								<path
									fill="#070706"
									d="M8.115,22.814c-0.176-0.097-0.332-0.219-0.474-0.361c-1.327-1.333-2.66-2.66-3.984-3.996c-1.988-2.009-2.302-4.936-0.785-7.32c0.234-0.37,0.529-0.694,0.839-1.004c3.208-3.214,6.415-6.43,9.623-9.644c0.625-0.626,1.497-0.652,2.079-0.066c0.559,0.562,0.527,1.455-0.077,2.065c-0.77,0.776-1.54,1.55-2.31,2.325c-0.041,0.122-0.14,0.2-0.226,0.287c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-1.136,1.167-1.096,2.938,0.068,4.128c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.321,0.466-0.739,0.75-1.333,0.728C8.445,22.987,8.281,22.907,8.115,22.814L8.115,22.814z"
								></path>
								<path
									fill="#EAB03C"
									d="M13.021,4.826c-0.044,0.115-0.138,0.19-0.221,0.273c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-0.58,0.596-0.853,1.349-0.827,2.102h0.046C4.781,14.368,4.78,14.339,4.78,14.31c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.248,0.251,0.576,0.375,0.908,0.375c0.35,0,0.705-0.138,0.977-0.413c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635C14.757,5.51,13.938,5.041,13.021,4.826L13.021,4.826z M14.4,0c-0.194,0.001-0.386,0.045-0.562,0.132C14.021,0.049,14.212,0.005,14.4,0L14.4,0z"
								></path>
								<path
									fill="#272726"
									d="M14.432,0c-0.01,0-0.021,0-0.031,0c-0.189,0.004-0.379,0.049-0.562,0.132c-0.178,0.081-0.349,0.2-0.504,0.356c-3.208,3.214-6.416,6.43-9.623,9.644c-0.31,0.31-0.604,0.634-0.839,1.004c-0.652,1.025-0.966,2.151-0.954,3.262h2.818c-0.026-0.753,0.248-1.506,0.827-2.102c1.402-1.442,2.842-2.849,4.265-4.272c0.111-0.119,0.261-0.189,0.372-0.305c0.849-0.889,1.737-1.742,2.6-2.619c0.083-0.084,0.177-0.159,0.221-0.273c0.002-0.005,0.003-0.009,0.005-0.014c0.77-0.775,1.54-1.549,2.31-2.325c0.604-0.61,0.637-1.503,0.077-2.065C15.133,0.14,14.786,0,14.432,0L14.432,0z"
								></path>
							</svg>
							<h3 className="text-[10px] md:text-base">
								LEETCODE
							</h3>
						</div>
					</div>
					{/* <div className="absolute w-[50vw] h-screen -top-10 left-[59%] rotate-20 ">
						<svg
							viewBox="0 0 600 800"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-auto"
						>
							<defs>
								<linearGradient
									id="lineGradient"
									x1="0"
									y1="0"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#7f5af0" />
									<stop offset="100%" stopColor="#2cb67d" />
								</linearGradient>
							</defs>

							<path
								ref={pathRef1}
								d="M100 800 
				   C 100 600, 300 600, 300 500
				   S 100 400, 200 300
				   S 400 300, 350 150
				   S 200 100, 300 0"
								stroke="url(#lineGradient)"
								strokeWidth="2"
								fill="none"
								strokeLinecap="round"
								style={{
									strokeDasharray: "1500",
									strokeDashoffset: "1500",
									transition: "none",
								}}
							/>
						</svg>
					</div>
					<div className="absolute w-[50vw] h-screen left-[54%] top-[10%] rotate-180 ">
						<svg
							viewBox="0 0 800 800"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-auto"
						>
							<defs>
								<linearGradient
									id="lineGradient"
									x1="0"
									y1="0"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#7f5af0" />
									<stop offset="100%" stopColor="#2cb67d" />
								</linearGradient>
							</defs>

							<path
								ref={pathRef2}
								d="
      M 50 700 
      C 100 600, 200 600, 250 500
      S 350 400, 300 300
      S 100 250, 300 200
      S 600 250, 500 100
      S 350 50, 700 0
    "
								stroke="url(#lineGradient)"
								strokeWidth="1.4"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								style={{
									strokeDasharray: "1500",
									strokeDashoffset: "1500",
									transition: "none",
								}}
							/>
						</svg>
					</div> */}
				</div>
			</div>
			<div className="h-[30vh] md:min-h-screen flex items-start md:items-center justify-center py-6">
				<div className="w-{20%] px-20 md:p-[15%] lg:p-[30%] aspect-auto grid grid-cols-2 gap-3 group">
					<div className="relative aspect-square bg-gray-200 dark:bg-gray-900 rounded-sm group-hover:rounded-sm rounded-br-4xl cursor-pointer border border-transparent hover:border-teal-500 dark:hover:border-gray-800 transition-all duration-300 group-hover:-rotate-2 group-hover:-translate-x-3 group-hover:-translate-y-3 hover:scale-110">
						<Image
							src="/react.png"
							width="300"
							height="300"
							alt="Image"
							className="w-32"
						/>
						<span className="w-full h-6 absolute bottom-0 text-center left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm font-semibold bg-gradient-to-t from-black/30 to-transparent">
							React JS
						</span>
					</div>
					<div className="relative bg-gray-200 dark:bg-gray-900 rounded-sm group-hover:rounded-sm rounded-bl-4xl cursor-pointer border border-transparent hover:border-teal-500 dark:hover:border-gray-800 transition-all duration-300 group-hover:rotate-2 group-hover:translate-x-3 group-hover:-translate-y-3 hover:scale-110">
						<Image
							src="/vs-code.png"
							width="300"
							height="300"
							alt="Image"
							className="w-32"
						/>
						<span className="w-full h-6 absolute bottom-0 text-center left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm font-semibold bg-gradient-to-t from-black/30 to-transparent">
							React JS
						</span>
					</div>
					<div className="relative bg-gray-200 dark:bg-gray-900 rounded-sm group-hover:rounded-sm rounded-tr-4xl cursor-pointer border border-transparent hover:border-teal-500 dark:hover:border-gray-800 transition-all duration-300 group-hover:rotate-2 group-hover:-translate-x-3 group-hover:translate-y-3 hover:scale-110">
						<Image
							src="/react.png"
							width="300"
							height="300"
							alt="Image"
							className="w-32"
						/>
						<span className="w-full h-6 absolute bottom-0 text-center left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm font-semibold bg-gradient-to-t from-black/30 to-transparent">
							React JS
						</span>
					</div>
					<div className="relative bg-gray-200 dark:bg-gray-900 rounded-sm group-hover:rounded-sm rounded-tl-4xl cursor-pointer border border-transparent hover:border-teal-500 dark:hover:border-gray-800 transition-all duration-300 group-hover:-rotate-2 group-hover:translate-x-3 group-hover:translate-y-3 hover:scale-110">
						<Image
							src="/react.png"
							width="300"
							height="300"
							alt="Image"
							className="w-32"
						/>
						<span className="w-full h-6 absolute bottom-0 text-center left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm font-semibold bg-gradient-to-t from-black/30 to-transparent">
							React JS
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeHero;
