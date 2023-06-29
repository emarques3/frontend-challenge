import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReviewInfo } from 'domains/user/experience/components/ReviewInfo';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Loading } from 'domains/shell/experience/components/Loading';
import { Navigator } from 'domains/navigation/experience/components/Navigator';
import { Title } from 'domains/shell/experience/components/Title';
import { Container, Centered, ReviewInfoWrapper } from 'pages/Confirmation/styles';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';

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
      <Centered>
        <Title label="Confirmation" />
      </Centered>
      <ReviewInfoWrapper>
        <ReviewInfo />
      </ReviewInfoWrapper>
      {loading ? (
        <Centered>
          <Loading size={80} />
        </Centered>
      ) : (
        <Navigator
          buttons={[
            { label: 'Back', onClick: onClickBack },
            { label: 'Submit', onClick: onClickSubmit },
          ]}
        />
      )}
    </Container>
  );
};
