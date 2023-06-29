import React from 'react';
import { BoxContainer, Checkbox } from 'domains/user/experience/components/TermsCheckbox/styles';
import { useUser } from 'domains/user/data/hooks/useUser';

export const TermsCheckbox = () => {
  const { agreedToTerms, setTerms } = useUser();

  const onCheckboxClick = () => {
    setTerms({ agreedToTerms: !agreedToTerms });
  };

  return (
    <BoxContainer>
      <Checkbox checked={agreedToTerms} onChange={onCheckboxClick} />I agree
    </BoxContainer>
  );
};
