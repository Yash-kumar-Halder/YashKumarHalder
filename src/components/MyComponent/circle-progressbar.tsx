import React from "react";

interface CircularProgressProps {
  total: number; // maximum value
  value: number; // current progress value
  progressColor?: string; // color of progress arc
  secondaryColor?: string; // color of background arc
  size?: number; // diameter of the circle in px
  strokeWidth?: number; // thickness of the arc
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  total,
  value,
  progressColor = "#4f46e5", // default Indigo-600
  secondaryColor = "#e5e7eb", // default Gray-200
  size = 120,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value / total, 0), 1); // clamp between 0 and 1
  const offset = circumference - progress * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="circular-progress"
    >
      {/* Background Circle */}
      <circle
        stroke={secondaryColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />

      {/* Progress Arc */}
      <circle
        stroke={progressColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />

      {/* Text in Center */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".35em"
        fontSize={size * 0.2}
        fontWeight="bold"
        fill={progressColor}
      >
        {value}/{total}
      </text>
    </svg>
  );
};

export default CircularProgress;
