import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Button } from 'pages/AdditionalInfo/styles';
import { ColorSelector } from 'domains/user/experience/components/ColorSelector';
import { TermsCheckbox } from 'domains/user/experience/components/TermsCheckbox';
import SignupRoute from 'pages/Signup/route';
import ConfirmationRoute from 'pages/Confirmation/route';
import { useUser } from 'domains/user/data/hooks/useUser';

export const AdditionalInfoPage = () => {
  const navigate = useNavigate();
  const { agreedToTerms, favoriteColor } = useUser();
  const canProceed = agreedToTerms && favoriteColor !== '';
  const onClickBack = () => {
    navigate(SignupRoute.path);
  };

  const onClickNext = () => {
    if (canProceed) {
      navigate(ConfirmationRoute.path);
    }
    return false;
  };

  return (
    <Container>
      Additional Info page
      <ColorSelector />
      <TermsCheckbox />
      <Button onClick={onClickBack}>Back</Button>
      <Button onClick={onClickNext} disabled={!canProceed}>
        Next
      </Button>
    </Container>
  );
};
