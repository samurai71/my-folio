import React from "react";

function Footer() {
  return (
    <footer className="mt-2 border-2">
      <p className="text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
