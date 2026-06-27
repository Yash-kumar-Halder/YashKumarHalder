"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface EducationAccordionProps {
    title: string;
    duration: string;
    description: string;
}

const EducationAccordion = ({
    title,
    duration,
    description,
}: EducationAccordionProps) => {
    const [isopen, setIsopen] = useState(false);

    return (
        <div className="border-l border-dashed border-neutral-400 ml-10">
            <div className="my-3 px-2 py-1">
                <div
                    onClick={() => setIsopen((prev) => !prev)}
                    className="flex gap-2 items-center text-neutral-300 cursor-pointer"
                >
                    <h2 className="text-neutral-600 font-bold dark:text-neutral-300 select-none">
                        ~ {title}
                    </h2>

                    <button className="cursor-pointer">
                        <motion.div
                            animate={{ rotate: isopen ? 180 : 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        >
                            <ChevronDown
                                size={20}
                                className="text-neutral-700 dark:text-neutral-300"
                            />
                        </motion.div>
                    </button>
                </div>

                <span className="text-xs mx-3 px-1.5 py-0.5 rounded-2xl text-neutral-600">
                    {duration}
                </span>

                <AnimatePresence initial={false}>
                    {isopen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                height: {
                                    duration: 0.35,
                                    ease: "easeInOut",
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            }}
                            className="overflow-hidden"
                        >
                            <motion.p
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.25 }}
                                className="pt-3 pl-4 text-neutral-500 dark:text-neutral-500 leading-relaxed"
                            >
                                {description}
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EducationAccordion;
