import React from 'react';

import { SuccessContainer } from 'pages/Success/styles';
import { Result } from 'domains/shell/experience/components/Result';

export const SuccessPage = () => (
  <SuccessContainer>
    <Result
      title="Success!"
      message="You should receive a confirmation email soon."
      iconPath="/success.svg"
    />
  </SuccessContainer>
);
