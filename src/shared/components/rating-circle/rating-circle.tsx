import React from "react";
interface RatingCircleProps {
    rating: number;
    className?: string;
    textClass?: string
}
const RatingCircle: React.FC<RatingCircleProps> = ({ rating, className, textClass }) => {
    return (
        <div className={`relative size-20 ${className ?? ''}`}>
            <svg
                className="size-full"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 "
                    strokeWidth="2"
                ></circle>
                <g className="origin-center -rotate-90 transform">
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-primary"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset={100 - rating}
                        style={{ animation: "dash 0.7s" }}
                    ></circle>
                </g>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className={`text-center text-2xl font-bold ${textClass ?? ''}`}>{rating}%</span>
            </div>
        </div>
    );
};

export default RatingCircle;