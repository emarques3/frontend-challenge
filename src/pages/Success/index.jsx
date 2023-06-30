import React from 'react';
import { Helmet } from 'react-helmet';

import { Result } from 'domains/shell/experience/components/Result';
import { SuccessContainer } from 'pages/Success/styles';

export const SuccessPage = () => (
  <SuccessContainer>
    <Helmet>
      <title>Eric&apos;s Solution - Success</title>
    </Helmet>
    <Result
      title="Success!"
      message="You should receive a confirmation email soon."
      iconPath="/success.svg"
    />
  </SuccessContainer>
);
