import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="https://2f.com.mx" target="_blank" rel="noopener noreferrer">
        Powered by <img src="/2f.png" alt="2f Logo" className="logo" />
      </a>
      <style jsx>{`
        footer img {
          margin-left: 0.1rem;
        }

        .logo {
          height: 1em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
