import React from "react";

interface CircularProgressProps {
  total: number;
  value: number;
  progressColor?: string;
  secondaryColor?: string;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  total,
  value,
  progressColor = "#4f46e5",
  secondaryColor = "#e5e7eb",
  size = "50%",
  strokeWidth = 10,
  className = "",
}) => {
  const numericSize =
    typeof size === "number" ? size : 120;
  const radius = (numericSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value / total, 0), 1);
  const offset = circumference - progress * circumference;

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${numericSize} ${numericSize}`}
        className="circular-progress w-full h-full"
      >
        <circle
          stroke={secondaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={numericSize / 2}
          cy={numericSize / 2}
        />
        <circle
          stroke={progressColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={numericSize / 2}
          cy={numericSize / 2}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize={numericSize * 0.2}
          fontWeight="bold"
          fill={progressColor}
        >
          {value}/{total}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
