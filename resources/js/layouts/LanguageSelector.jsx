// import { useTranslation } from 'react-i18next';
// import { useLanguageStore } from '@/hooks/store/useLanguageStore';
// import MyButton from '@/components/MyButton';  // Import the MyButton component

// const LanguageSelector = () => {
//   const { language, changeLanguage } = useLanguageStore();
//   const { t } = useTranslation();

//   const handleChangeLanguage = (newLanguage) => {
//     changeLanguage(newLanguage);  // Update the language in store and i18next
//   };

//   return (
//     <div>
//       <p>{t('current_language', { lng: language })}</p>
//       <MyButton onClick={() => handleChangeLanguage('en')} />
//       <MyButton onClick={() => handleChangeLanguage('am')} />
//       <MyButton onClick={() => handleChangeLanguage('or')} />
//     </div>
//   );
// };

// export default LanguageSelector;
import { UnstyledButton } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { useLanguageStore } from '@/hooks/store/useLanguageStore';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguageStore();
  const { t } = useTranslation();

  const handleChangeLanguage = (newLanguage) => {
    changeLanguage(newLanguage);  
  };

  return (
    <div>
      <p>{t('current_language', { lng: language })}</p>
      <UnstyledButton icon={<IconLanguage />} onClick={() => handleChangeLanguage('en')}>
        English
      </UnstyledButton>
      <UnstyledButton icon={<IconLanguage />} onClick={() => handleChangeLanguage('am')}>
        አማርኛ
      </UnstyledButton>
      <UnstyledButton icon={<IconLanguage />} onClick={() => handleChangeLanguage('or')}>
        Oromo
      </UnstyledButton>
    </div>
  );
};

export default LanguageSelector;
