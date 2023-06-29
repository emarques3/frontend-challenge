import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'pages/AdditionalInfo/styles';
import { ColorSelector } from 'domains/user/experience/components/ColorSelector';
import { TermsCheckbox } from 'domains/user/experience/components/TermsCheckbox';
import SignupRoute from 'pages/Signup/route';
import ConfirmationRoute from 'pages/Confirmation/route';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Navigator } from 'domains/navigation/experience/components/Navigator';

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
      <Navigator
        buttons={[
          { label: 'Back', onClick: onClickBack },
          { label: 'Next', onClick: onClickNext, disabled: !canProceed },
        ]}
      />
    </Container>
  );
};
