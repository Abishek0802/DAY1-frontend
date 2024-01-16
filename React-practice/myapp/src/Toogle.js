import React, { useState } from "react";

const PasswordToggle = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <label htmlFor="passwordInput">Password:</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        id="passwordInput"
        style={{ padding: "10px", marginRight: "5px" }}
      />
      <span style={{ cursor: "pointer" }} onClick={togglePasswordVisibility}>
        👁️
      </span>
    </div>
  );
};

export default PasswordToggle;
