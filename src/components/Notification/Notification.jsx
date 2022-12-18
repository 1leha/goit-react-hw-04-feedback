import React from 'react';
import { NotificationStyled } from './Notification.styled';

export default function Notification({ message }) {
  return <NotificationStyled>{message}</NotificationStyled>;
}
