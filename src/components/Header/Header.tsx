import React from "react";

import { ThemeToggle } from "@/components/Header/theme-toggle";
// import Link from "next/link";

/**
 * A functional component that renders a header with a theme toggle button.
 *
 * @returns {JSX.Element | null} The JSX element representing the header, or null if an error occurs.
 */
export function Header(): JSX.Element | null {
  try {
    // Render a header with a theme toggle button
    return (
      <header className="text-center">
        {/* Render a theme toggle button */}
        <ThemeToggle />
      </header>
    );
  } catch (error) {
    // If an error occurs, log the error and return null to prevent the entire
    // application from crashing.
    console.error(error);
    return null;
  }
}

export default Header;
