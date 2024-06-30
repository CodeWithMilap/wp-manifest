// components/DarkLightModeSwitch.tsx
import React from "react";
import { useTheme } from "next-themes";
import { DarkIcon, LightIcon } from "../utils/Icons";
import AppButton from "./Button";

const DarkLightModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppButton
      variant="link"
      onClick={() => toggleTheme()}
      icon={theme === "dark" ? <DarkIcon className="h-5 w-5" /> : <LightIcon  className="h-5 w-5" />}
    />
  );
};

export default DarkLightModeSwitch;
