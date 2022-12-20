import React, { useState, useEffect, useMemo } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import { Box } from 'components/Box';
import AppHeader from 'components/AppHeader';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { AppStyled } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [posetivePercentage, setPosetivePercentage] = useState(0);

  const fidbacks = useMemo(() => {
    return { good, neutral, bad };
  }, [good, neutral, bad]);

  const buttons = Object.keys(fidbacks);

  useEffect(() => {
    const countTotalFeedback = () => {
      const feedbackValues = Object.values(fidbacks);
      return feedbackValues.reduce(
        (acc, feedbackValue) => acc + feedbackValue,
        0
      );
    };

    const countPositiveFeedbackPercentage = (goodFeedback, totalFeedback) => {
      if (!totalFeedback) {
        return 0;
      }
      return Math.round((goodFeedback * 100) / totalFeedback);
    };

    setTotal(countTotalFeedback());
    setPosetivePercentage(countPositiveFeedbackPercentage(good, total));
  }, [fidbacks, good, total]);

  const increaceFeedaback = button => {
    console.log('button :>> ', button);
    switch (button) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize="xxl"
      color="primary"
    >
      <AppStyled>
        <AppHeader />
        <Box color="third" mt="4" mb="4">
          <Section title="Please, leave Your feedback">
            <FeedbackOptions
              options={buttons}
              onLeaveFeedback={increaceFeedaback}
            />
          </Section>
        </Box>
        <Box bg="footerBG" color="secondary" height="124px">
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={posetivePercentage}
              />
            ) : (
              <Notification message="There is no feedback yet..." />
            )}
          </Section>
        </Box>
      </AppStyled>
    </Box>
  );
};
