import React from 'react'
import EducationAccordion from './education-accordion';
import { GraduationCap } from 'lucide-react';
import ExperienceAccordion from './experience-accordion-props';

const Experience = () => {
  return (
      <div className="max-w-5xl mx-auto border-x">
          <div className="w-full">
              <h1 className="border-y px-5 text-2xl text-neutral-200">
                  Experience
              </h1>
              <div className="border-b">
                  <div className="flex gap-2 items-start px-2 py-3 pb-2 border-b border-dashed border-neutral-600 w-fit ml-5">
                      {/* <GraduationCap className="p-0.5 border rounded-sm border-r-neutral-600 bg-neutral-800 text-neutral-300" /> */}
                      <span className="p-0.5 border rounded-sm border-r-neutral-600 bg-neutral-800 text-neutral-300 text-xs">
                          /TW
                      </span>
                      <div>
                          <h3 className="">Thoughtworks</h3>
                      </div>
                  </div>
                  <ExperienceAccordion
                      title="Intern (STEP)"
                      starting="July, 2026"
                      ending="live"
                      description="I successfully completed my Diploma in Computer Science & Technology in 2026. During my studies, I built a strong foundation in programming, web development, database management, and problem-solving."
                  />
                  <div className="flex gap-2 items-start px-2 py-3 pb-2 border-b border-dashed border-neutral-600 w-fit ml-5">
                      <GraduationCap className="p-0.5 border rounded-sm border-r-neutral-600 bg-neutral-800 text-neutral-300" />
                      <div>
                          <h3 className="">Higher Secondary</h3>
                      </div>
                  </div>
                  <ExperienceAccordion
                      title="Databits Technologia"
                      starting="Jan, 2024"
                      ending="Jan 2024"
                      description="This a one month internship on full stack web development."
                  />
              </div>
          </div>
      </div>
  );
}

export default Experience
