import styled from 'styled-components';

export const FeedbackButtonStyled = styled.button`
  width: 90px;
  height: 90px;

  border-radius: ${p => p.theme.radii.rounded};
  border: none;
  outline: none;

  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.third};
  background-color: ${p => p.theme.colors[p.buttonBG]};

  transition: all 0.3s ease;

  box-shadow: ${p => p.theme.shadows.buttonsUp};

  :hover {
    box-shadow: ${p => p.theme.shadows.buttonsDown};
  }
`;
