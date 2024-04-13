import React from "react";

function Footer() {
  return (
    <footer className="border-2 mt-2">
      <p className="text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
