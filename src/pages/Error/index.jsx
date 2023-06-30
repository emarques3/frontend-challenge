import React from 'react';
import { Helmet } from 'react-helmet';

import { Result } from 'domains/shell/experience/components/Result';
import { ErrorContainer } from 'pages/Error/styles';

export const ErrorPage = () => (
  <ErrorContainer>
    <Helmet>
      <title>Eric&apos;s Solution - Error</title>
    </Helmet>
    <Result
      title="Error"
      message="Uh oh. Something went wrong. Please try again later."
      iconPath="/error.svg"
    />
  </ErrorContainer>
);
