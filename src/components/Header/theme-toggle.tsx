"use client";

import { useTheme } from "next-themes";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

/**
 * A functional component that renders a theme toggle button.
 *
 * @returns {JSX.Element} The JSX element representing the theme toggle button.
 */
export const ThemeToggle: React.FC = (): JSX.Element => {
  // Get the current theme and a function to set a new theme from the
  // useTheme hook.
  const { theme, setTheme }: { theme: string, setTheme: (theme: string) => void } = useTheme();

  // Return a button component that will toggle the theme when clicked.
  return (
    <Button
      // Make the button variant "ghost" so that it doesn't have a background
      // color.
      variant="ghost"
      // Make the button size "icon" so that it is just large enough to hold
      // the icon.
      size="icon"
      // Give the button an aria-label so that screen readers can read it out
      // to users.
      aria-label="theme toggle"
      // When the button is clicked, toggle the theme.
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* If the current theme is not dark, show the sun icon. */}
      <Icons.sun className="dark:hidden" />
      {/* If the current theme is dark, show the moon icon. */}
      <Icons.moon className="hidden dark:block" />
    </Button>
  );
};
