import React from 'react';

import { ErrorContainer } from 'pages/Error/styles';
import { Result } from 'domains/shell/experience/components/Result';

export const ErrorPage = () => (
  <ErrorContainer>
    <Result
      title="Error"
      message="Uh oh. Something went wrong. Please try again later."
      iconPath="/error.svg"
    />
  </ErrorContainer>
);
