import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'pages/Confirmation/styles';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';
import { ReviewInfo } from 'domains/user/experience/components/ReviewInfo';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Loading } from 'domains/shell/experience/components/Loading';
import { Navigator } from 'domains/navigation/experience/components/Navigator';

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { submit, setLoading, loading } = useUser();

  const onClickBack = () => {
    navigate(AdditionalInfoRoute.path);
  };

  const onClickSubmit = () => {
    setLoading(true);
    submit();
  };

  return (
    <Container>
      Confirmation page
      <ReviewInfo />
      {loading ? (
        <Loading size={150} />
      ) : (
        <Navigator
          buttons={[
            { label: 'Back', onClick: onClickBack },
            { label: 'Next', onClick: onClickSubmit },
          ]}
        />
      )}
    </Container>
  );
};
