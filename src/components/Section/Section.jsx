import React from 'react';
import { SectionStyled, SectionTitledStyled } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyled>
      <SectionTitledStyled>{title}</SectionTitledStyled>
      {children}
    </SectionStyled>
  );
}
