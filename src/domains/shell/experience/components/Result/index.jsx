import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Centered,
  Icon,
  Message,
  MessageContainer,
  ResultContainer,
  Title,
} from 'domains/shell/experience/components/Result/styles';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Navigator } from 'domains/navigation/experience/components/Navigator';
import SignupRoute from 'pages/Signup/route';

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
