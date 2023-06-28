import React from 'react';
import { Container } from 'pages/Signup/styles';
import { useUser } from 'domains/user/data/hooks/useUser';

export const SignupPage = () => {
  const { userName } = useUser();

  return <Container>Signup page - {userName}</Container>;
};
