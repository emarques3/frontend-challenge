import React from 'react';

import { UserForm } from 'domains/user/experience/components/UserForm';
import { Title } from 'domains/shell/experience/components/Title';
import { Container, TitleWrapper, FormContainer } from 'pages/Signup/styles';

export const SignupPage = () => (
  <Container>
    <TitleWrapper>
      <Title label="Sign Up" />
    </TitleWrapper>
    <FormContainer>
      <UserForm />
    </FormContainer>
  </Container>
);
