import React from 'react';
import {
  Centered,
  ResultContainer,
  Title,
  Icon,
  Message,
  MessageContainer,
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
      <Centered>
        <Title>{title}</Title>
      </Centered>
      <MessageContainer>
        <Icon src={iconPath} />
        <Message>{message}</Message>
      </MessageContainer>
      <Navigator buttons={[{ label: 'Restart', onClick: onClickRestart }]} />
    </ResultContainer>
  );
};
