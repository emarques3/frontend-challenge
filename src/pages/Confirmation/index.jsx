import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Button } from 'pages/Confirmation/styles';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';
import { ReviewInfo } from 'domains/user/experience/components/ReviewInfo';
import { useUser } from 'domains/user/data/hooks/useUser';

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { submit } = useUser();

  const onClickBack = () => {
    navigate(AdditionalInfoRoute.path);
  };

  const onClickSubmit = () => {
    submit();
  };

  return (
    <Container>
      Confirmation page
      <ReviewInfo />
      <Button onClick={onClickBack}>Back</Button>
      <Button onClick={onClickSubmit}>Submit</Button>
    </Container>
  );
};
