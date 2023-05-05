import React from "react";

function Footer() {
  return (
    <div className="bg-gray-700 py-6 text-center text-gray-300">
      made by{" "}
      <a
        target="_blank"
        className="underline"
        href="https://www.linkedin.com/in/oussama-ennadafy/"
      >
        oussama
      </a>
      , and tested by{" "}
      <a
        target="_blank"
        className="underline"
        href="https://www.linkedin.com/in/ayoub-akraou-051a431a8/"
      >
        Ayoub
      </a>
    </div>
  );
}

export default Footer;
