import { cn } from "@/lib/utils";

interface HorizontalScaleProps {
    className?: string;
}

const HorizontalScale = ({ className }: HorizontalScaleProps) => {
    return (
        <div
            className={cn(
                "h-6 absolute w-full bg-[repeating-linear-gradient(315deg,var(--line-pattern)_0px,var(--line-pattern)_1px,transparent_1px,transparent_50%)] bg-[length:10px_10px]  border-y border-y-[var(--line-pattern)] ",
                className,
            )}
        />
    );
};

export default HorizontalScale;
