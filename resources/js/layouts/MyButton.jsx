// resources/js/components/MyButton.jsx
import { UnstyledButton } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';

const MyButton = ({ onClick }) => {
  return (
    <UnstyledButton icon={<IconLanguage />} onClick={onClick}>
      Select Language
    </UnstyledButton>
  );
};

export default MyButton;
