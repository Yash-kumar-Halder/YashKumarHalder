import { cn } from "@/lib/utils";

interface VerticalScaleProps {
    className?: string;
}

const VerticalScale = ({ className }: VerticalScaleProps) => {
    return (
        <div
            className={cn(
                "w-6 self-stretch bg-[repeating-linear-gradient(135deg,var(--line-pattern)_0px,var(--line-pattern)_1px,transparent_1px,transparent_50%)] bg-[length:10px_10px] border-x border-x-[var(--line-pattern)] ",
                className,
            )}
        />
    );
};

export default VerticalScale;
