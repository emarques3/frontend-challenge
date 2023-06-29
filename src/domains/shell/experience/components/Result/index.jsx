import React from 'react';
import {
  ResultContainer,
  Title,
  Icon,
  Message,
} from 'domains/shell/experience/components/Result/styles';
import { useNavigate } from 'react-router-dom';
import SignupRoute from 'pages/Signup/route';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Navigator } from 'domains/navigation/experience/components/Navigator';

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
      <Navigator buttons={[{ label: 'Restart', onClick: onClickRestart }]} />
    </ResultContainer>
  );
};
