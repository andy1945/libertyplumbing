import React from "react";

export default function TelwidButton({
  text = "Click Me",
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) {
  return (
    <button className="animated-button whitespace-nowrap" onClick={onClick}>
      <svg
        className="arr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>
      <span className="text">{text}</span>
      <span className="circle"></span>
      <svg
        className="arr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>

      <style jsx>{`
        /* Updated color scheme following provided design guide */
        .animated-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 16px 36px;
          border: 4px solid transparent;
          font-size: 16px;
          background-color: #35b9ee; /* Primary Blue for CTA */
          border-radius: 100px;
          font-weight: 600;
          color: #f2f7f2; /* Soft Cream text */
          box-shadow: 0 4px 12px rgba(26, 35, 75, 0.25); /* Navy Blue shadow for depth */
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-button svg {
          position: absolute;
          width: 24px;
          fill: #f2f7f2;
          z-index: 9;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-button .arr-1 {
          right: 16px;
        }

        .animated-button .arr-2 {
          left: -25%;
        }

        .animated-button .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: #35eeb9; /* Deep Teal for contrast animation */
          border-radius: 50%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-button .text {
          position: relative;
          z-index: 1;
          transform: translateX(-12px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-button:hover {
          box-shadow: 0 0 0 12px transparent;
          color: #1a234b; /* Navy Blue on hover for text */
          background-color: #35eeb9; /* Deep Teal hover background */
          border-radius: 12px;
        }

        .animated-button:hover .arr-1 {
          right: -25%;
        }

        .animated-button:hover .arr-2 {
          left: 16px;
        }

        .animated-button:hover .text {
          transform: translateX(12px);
        }

        .animated-button:hover svg {
          fill: #1a234b; /* Navy Blue arrows on hover */
        }

        .animated-button:active {
          scale: 0.95;
          box-shadow: 0 0 0 4px #3587ee; /* Vivid Cyan border pulse */
        }

        .animated-button:hover .circle {
          width: 220px;
          height: 220px;
          opacity: 1;
        }
      `}</style>
    </button>
  );
}
