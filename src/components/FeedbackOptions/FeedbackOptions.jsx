// import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'components/Box';
import { FeedbackButtonStyled } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Box as="ul" display="flex" gridGap="10px" justifyContent="space-between">
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButtonStyled
              buttonBG={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButtonStyled>
          </li>
        );
      })}
    </Box>
  );
}
