import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  image: string;         // image URL
  title: string;         // project title
  github: string;        // GitHub link
  live?: string;         // optional live demo link
  layer?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, github, live, layer }) => {
  return (
    <div>
      <div className="group bg-gray-600/30 aspect-7/5 p-4 rounded-xl relative transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-800 hover:dark:border-gray-600 overflow-hidden">
        
       <div className="h-full w-full relative overflow-hidden rounded-lg">
       {/* Project Image */}
        <Image
          src={image}
          width={400}
          height={400}
          alt={`${title} preview`}
          className="rounded-lg h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />

        {/* Live Preview Link (optional) */}
        {live && (
          <Link
            href={live}
            target="_blank"
            className="absolute top-5 bg-[#00000052] px-3 py-0.5 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:scale-x-[1.2]
            transition-all duration-200 flex items-center gap-2"
          >
            <p className="text-sm" >Live</p>
            <ExternalLink size={16} className="stroke-white" />
          </Link>
        )}

        <div style={{ backgroundColor: layer }} className={`absolute bg-gradient-to-b w-full h-[30%] -bottom-[19%] backdrop-blur-[2px] left-0 group-hover:bottom-0 transition-all duration-200 px-[5%] pt-[2%] flex flex-col gap-1`}>
            <h2 className="text-black font-semibold text-lg " >Vibe - A social Media Platform</h2>
            <Link href={"github.com"} className="flex items-center gap-1 border-black bg-[#ffffff65] shadow-md w-fit px-2 py-0.5 rounded-full text-black" >
                <Github size={14} />
                <p className="font-semibold text-sm" >Github</p>
            </Link>
        </div>

       </div>
      </div>
    </div>
  );
};

export default ProjectCard;
