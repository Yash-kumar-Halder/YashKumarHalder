import { Github, GithubIcon } from 'lucide-react';
import React from 'react'
import { RiGithubFill } from 'react-icons/ri';

const GithubStatsCard = () => {
  return (
    <div className="h-full bg-white shadow-md px-5 py-3 dark:bg-[#0c0c0c] md:w-[800px] aspect-[1/0.35] rounded-md">
          <div className="flex items-center gap-2 ">
            <div className='flex items-center gap-2' >
                <RiGithubFill size={28} /> <h1 className='text-2xl font-bold' >Yash-Kumar-Halder</h1>
            </div>
          </div>
        </div>
  )
}

export default GithubStatsCard;
