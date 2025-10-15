import React from "react";
import { useOverlay } from "@/context/OverlayContext";
import finacialIMage from "@/assets/310x610_zero_percent.png";

export const ImageOverlay = () => {
  const { isOverlayVisible, hideOverlay } = useOverlay();

  if (!isOverlayVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
      onClick={hideOverlay}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "90%",
          maxHeight: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={hideOverlay}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: "30px",
            textAlign: "center",
          }}
        >
          &times;
        </button>
        <a
          href="https://app.gethearth.com/partners/liberty-plumbing-electrical?utm_campaign=56577&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=310x610"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={finacialIMage}
            alt="home_improvement 310x610"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </a>
      </div>
    </div>
  );
};
