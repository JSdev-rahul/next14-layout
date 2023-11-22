import React from "react";

const PageCard = ({ children }) => {
  return (
    <div
      style={{
        height: "84vh", // Set the height to 100%
        overflow: "auto",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default PageCard;

// export default PageCard;
