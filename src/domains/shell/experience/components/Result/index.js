import React from 'react';
import {
  ResultContainer,
  Title,
  Icon,
  Message,
  Button,
} from 'domains/shell/experience/components/Result/styles';
import { useNavigate } from 'react-router-dom';
import SignupRoute from 'pages/Signup/route';
import { useUser } from 'domains/user/data/hooks/useUser';

export const Result = ({ title, message, iconPath }) => {
  const navigate = useNavigate();
  const { reset } = useUser();

  const onClickRestart = () => {
    reset();
    navigate(SignupRoute.path);
  };

  return (
    <ResultContainer>
      <Title>{title}</Title>
      <Icon src={iconPath} />
      <Message>{message}</Message>
      <Button onClick={onClickRestart}>Restart</Button>
    </ResultContainer>
  );
};
