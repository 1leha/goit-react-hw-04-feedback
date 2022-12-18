import styled from 'styled-components';

export const AppTitleStyled = styled.h1`
  font-size: ${p => p.theme.fontSizes.xxl};
  text-align: center;
  margin: ${p => p.theme.space[0]}px;
`;

export const AppTaglineStyled = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.tagline};
  text-align: center;
  text-transform: uppercase;
`;
