import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Button } from 'pages/Confirmation/styles';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';
import { ReviewInfo } from 'domains/user/experience/components/ReviewInfo';
import { useUser } from 'domains/user/data/hooks/useUser';
import { Loading } from 'domains/shell/experience/components/Loading';

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
        <>
          <Button onClick={onClickBack}>Back</Button>
          <Button onClick={onClickSubmit}>Submit</Button>
        </>
      )}
    </Container>
  );
};
