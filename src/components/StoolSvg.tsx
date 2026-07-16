import type { BristolType } from "../types/quiz";

interface StoolSvgProps {
  type: BristolType;
  className?: string;
}

const baseFill = "#8B5A2B";
const darkFill = "#6B4226";

export function StoolSvg({ type, className = "" }: StoolSvgProps) {
  const commonClasses = `w-full h-full ${className}`;

  switch (type) {
    case "type1":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Separate hard lumps"
        >
          <circle cx="40" cy="80" r="22" fill={baseFill} />
          <circle cx="90" cy="70" r="26" fill={baseFill} />
          <circle cx="145" cy="85" r="20" fill={baseFill} />
          <circle cx="175" cy="60" r="14" fill={darkFill} />
        </svg>
      );

    case "type2":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Sausage-shaped but lumpy"
        >
          <rect
            x="30"
            y="35"
            width="140"
            height="50"
            rx="25"
            fill={baseFill}
          />
          <circle cx="60" cy="45" r="12" fill={darkFill} opacity="0.5" />
          <circle cx="100" cy="75" r="10" fill={darkFill} opacity="0.5" />
          <circle cx="140" cy="48" r="11" fill={darkFill} opacity="0.5" />
        </svg>
      );

    case "type3":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Like a sausage with cracks"
        >
          <rect
            x="30"
            y="35"
            width="140"
            height="50"
            rx="25"
            fill={baseFill}
          />
          <path
            d="M55 50 Q65 58 75 50 M95 60 Q105 68 115 60 M135 52 Q145 60 155 52"
            stroke={darkFill}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );

    case "type4":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Smooth sausage or snake"
        >
          <rect
            x="25"
            y="40"
            width="150"
            height="40"
            rx="20"
            fill={baseFill}
          />
        </svg>
      );

    case "type5":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Soft blobs with clear edges"
        >
          <rect x="35" y="55" width="55" height="35" rx="16" fill={baseFill} />
          <rect
            x="100"
            y="40"
            width="65"
            height="40"
            rx="18"
            fill={baseFill}
          />
        </svg>
      );

    case "type6":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Fluffy pieces with ragged edges"
        >
          <path
            d="M45 70 C35 60 40 45 55 45 C65 40 80 45 90 50 C100 40 120 40 130 50 C145 45 160 55 155 70 C165 80 150 95 130 90 C110 100 80 95 65 85 C50 90 35 80 45 70"
            fill={baseFill}
          />
        </svg>
      );

    case "type7":
      return (
        <svg
          viewBox="0 0 200 120"
          className={commonClasses}
          aria-label="Watery, no solid pieces"
        >
          <path
            d="M20 60 Q50 40 80 60 T140 60 T180 55"
            stroke={baseFill}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M30 80 Q60 65 90 80 T150 78 T190 82"
            stroke={baseFill}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      );
  }
}
