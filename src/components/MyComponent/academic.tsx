import { GraduationCap } from "lucide-react";
import HorizontalScale from "./horizontal-scale";
import EducationAccordion from "./education-accordion";

const Academic = () => {
    return (
        <div className="w-full">
            <HorizontalScale className="relative" />
            <div className="w-full py-5">
                <h1 className="border-y px-5 text-2xl text-neutral-200">
                    Academic
                </h1>
                <div className="border-b" >
                    <div className="flex gap-2 items-start px-2 py-3 pb-2 border-b border-dashed border-neutral-600 w-fit ml-5">
                        <GraduationCap className="p-0.5 border rounded-sm border-r-neutral-600 bg-neutral-800 text-neutral-300" />
                        <div>
                            <h3 className="">
                                Diploma in Computer Science & Technology
                            </h3>
                        </div>
                    </div>
                    <EducationAccordion
                        title="Behala Government Polytechnic"
                        duration="2023 - 2026"
                        description="I successfully completed my Diploma in Computer Science & Technology in 2026. During my studies, I built a strong foundation in programming, web development, database management, and problem-solving."
                    />
                    <div className="flex gap-2 items-start px-2 py-3 pb-2 border-b border-dashed border-neutral-600 w-fit ml-5">
                        <GraduationCap className="p-0.5 border rounded-sm border-r-neutral-600 bg-neutral-800 text-neutral-300" />
                        <div>
                            <h3 className="">
                                Higher Secondary
                            </h3>
                        </div>
                    </div>
                    <EducationAccordion
                        title="Jyotrimoy Basu Vocational Training Center"
                        duration="2022 - 2024"
                        description="Completed Higher Secondary education with a focus on science and technology subjects, achieving 81.8% marks."
                    />
                </div>
            </div>
            <HorizontalScale className="relative" />
        </div>
    );
};

export default Academic;
