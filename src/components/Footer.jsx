import React from "react";

const Footer = () => {
  return (
    <footer style={{
      background: "#f2f2f2",
      padding: "1rem",
      textAlign: "center",
      marginTop: "2rem"
    }}>
      <p>&copy; {new Date().getFullYear()} ToffeeBlings. All rights reserved.</p>
      <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
        Nails ✦ Lashes ✦ Pedicure
      </p>
    </footer>
  );
};

export default Footer;
