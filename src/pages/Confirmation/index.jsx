import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Button } from 'pages/Confirmation/styles';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';
import { ReviewInfo } from 'domains/user/experience/components/ReviewInfo';

export const ConfirmationPage = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(AdditionalInfoRoute.path);
  };

  return (
    <Container>
      Confirmation page
      <ReviewInfo />
      <Button onClick={onClickBack}>Back</Button>
    </Container>
  );
};
