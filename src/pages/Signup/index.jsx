import React from 'react';
import { Helmet } from 'react-helmet';
import { UserForm } from 'domains/user/experience/components/UserForm';
import { Title } from 'domains/shell/experience/components/Title';
import { Container, TitleWrapper, FormContainer } from 'pages/Signup/styles';

export const SignupPage = () => (
  <Container>
    <Helmet>
      <title>Eric&apos;s Solution - Sign Up</title>
    </Helmet>
    <TitleWrapper>
      <Title label="Sign Up" />
    </TitleWrapper>
    <FormContainer>
      <UserForm />
    </FormContainer>
  </Container>
);
