import React from 'react';

import { Result } from 'domains/shell/experience/components/Result';
import { SuccessContainer } from 'pages/Success/styles';

export const SuccessPage = () => (
  <SuccessContainer>
    <Result
      title="Success!"
      message="You should receive a confirmation email soon."
      iconPath="/success.svg"
    />
  </SuccessContainer>
);
