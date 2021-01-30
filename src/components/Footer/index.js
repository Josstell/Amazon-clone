import React from "react";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
      <style jsx>{`
        footer img {
          margin-left: 0.5rem;
        }
        .logo {
          height: 1em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
