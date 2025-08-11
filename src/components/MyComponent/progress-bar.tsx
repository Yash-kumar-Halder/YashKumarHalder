import React from "react";

interface ProgressBarProps {
  total: number; // maximum value
  value: number; // current progress value
  progressColor?: string; // color of filled portion
  secondaryColor?: string; // color of background
  height?: number; // height in px
  borderRadius?: number; // border radius in px
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  value,
  progressColor = "#4f46e5", // Indigo-600
  secondaryColor = "#e5e7eb", // Gray-200
  height = 20,
  borderRadius = 10,
}) => {
  const progress = Math.min(Math.max(value / total, 0), 1) * 100; // clamp between 0 and 100

  return (
    <div
      style={{
        backgroundColor: secondaryColor,
        borderRadius,
        height,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: progressColor,
          width: `${progress}%`,
          height: "100%",
          borderRadius,
          transition: "width 0.5s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          width: "100%",
          lineHeight: `${height}px`,
          fontWeight: "bold",
          color: progressColor,
        }}
      >
        {value}/{total}
      </div>
    </div>
  );
};

export default ProgressBar;
