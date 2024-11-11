import React from "react";
import { UnstyledButton } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";

const LanguageSelector = () => {
  // Debugging: Log to console to confirm the component is rendered
  console.log("LanguageSelector rendered");

  return (
    <UnstyledButton
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        backgroundColor: "lightgray",
        zIndex: 9999,
      }}
    >
      <IconLanguage />
      Language Button
    </UnstyledButton>
  );
};

export default LanguageSelector;
