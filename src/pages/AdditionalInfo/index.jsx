import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ColorSelector } from 'domains/user/experience/components/ColorSelector';
import { Navigator } from 'domains/navigation/experience/components/Navigator';
import { TermsCheckbox } from 'domains/user/experience/components/TermsCheckbox';
import { Title } from 'domains/shell/experience/components/Title';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Container, TitleWrapper } from 'pages/AdditionalInfo/styles';
import SignupRoute from 'pages/Signup/route';
import ConfirmationRoute from 'pages/Confirmation/route';

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
      <TitleWrapper>
        <Title label="Additional Info" />
      </TitleWrapper>
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
