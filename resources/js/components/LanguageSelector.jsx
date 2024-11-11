
import React from "react";
import { UnstyledButton, Menu, Group, Title, Indicator } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import Flag from "react-world-flags"; // Import the flag component
import { useTranslation } from "react-i18next"; // i18next hook
import { useLanguageStore } from "@/hooks/store/useLanguageStore"; 
import classes from "./css/LanguageSelector.module.css"; 

const LanguageSelector = () => {
  // Debugging: Log to console to confirm the component is rendered
  console.log("LanguageSelector rendered");
  const { language, changeLanguage } = useLanguageStore();
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English", flag: "US" },  // Flag code corresponds to country
    { code: "am", label: "አማርኛ", flag: "ET" },  // Ethiopia (Amharic)
    { code: "or", label: "Oromo", flag: "ET" },  // Ethiopia (Oromo)
  ];

  const handleChangeLanguage = (newLanguage) => {
    if (language !== newLanguage) {
      changeLanguage(newLanguage); // Update language in store
      i18n.changeLanguage(newLanguage); // Update i18next language
    }
  };
  return (
    <Menu withArrow position="bottom-end" shadow="md" transition="pop-top-right">
    <Indicator color="blue" label={language.toUpperCase()} size={16} offset={3} className={classes.indicator}>
      <Menu.Target>
        <UnstyledButton className={classes.languageButton}>
          <IconLanguage style={{ width: "20px", height: "24px", marginRight: "10px" }} />
         
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown p={12} className={classes.dropdown}>
        <Group justify="space-between" m={10} ml={15}>
      
        </Group>

        {languages.map((lang) => (
          <Menu.Item
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
            className={classes.languageItem}
            active={language === lang.code}
          >
            <Flag code={lang.flag} style={{ width: 20, height: 15, marginRight: "10px" }} />
            {lang.label}
          </Menu.Item>
        ))}

<Group justify="space-between" m={10} ml={15}>
      
      </Group>

        
      </Menu.Dropdown>
    </Indicator>
  </Menu>
);
};

export default LanguageSelector;
