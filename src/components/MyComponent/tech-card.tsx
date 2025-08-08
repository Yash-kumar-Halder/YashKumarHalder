import Image from "next/image";
import React from "react";

type TechCardProps = {
	imageUrl: string;
	title: string;
	description: string;
};

const TechCard = ({ imageUrl, title, description }: TechCardProps) => {
	return (
		<div className="px-4 py-2 mx-3 rounded-sm cursor-pointer border border-gray-950/20 dark:border-gray-50/20 hover:border-gray-700 dark:hover:border-gray-600 hover:scale-105 flex items-center gap-3 transition-all duration-200">
			<div className="p-2 w-fit aspect-square bg-gray-600/25 border border-transparent hover:border-gray-50/20 transition-colors duration-200 rounded-md">
				<Image
					src={imageUrl}
					width={80}
					height={80}
					alt={title}
					className="w-10 rounded-lg"
				/>
			</div>
			<div>
				<h3 className="text-lg leading-5 font-bold text-stone-800 dark:text-gray-200">
					{title}
				</h3>
				<h6 className="text-xs text-muted-foreground">
					{description}
				</h6>
			</div>
		</div>
	);
};

export default TechCard;
