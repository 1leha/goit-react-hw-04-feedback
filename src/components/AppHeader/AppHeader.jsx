import React from 'react';
import { AppTitleStyled, AppTaglineStyled } from './AppHeader.styled';
import { Box } from 'components/Box';

export default function AppHeader() {
  return (
    <Box as="div" backgroundColor="titleBG" color="secondary" p="4">
      <AppTitleStyled>Cafe "Espresso"</AppTitleStyled>
      <AppTaglineStyled>Make coffee since 1813</AppTaglineStyled>
    </Box>
  );
}
