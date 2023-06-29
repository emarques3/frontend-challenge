import React from 'react';
import {
  BoxContainer,
  Checkbox,
  Label,
  TermsLink,
} from 'domains/user/experience/components/TermsCheckbox/styles';
import { useUser } from 'domains/user/data/hooks/useUser';

export const TermsCheckbox = () => {
  const { agreedToTerms, setTerms } = useUser();

  const onCheckboxClick = () => {
    setTerms({ agreedToTerms: !agreedToTerms });
  };

  return (
    <BoxContainer>
      <Checkbox checked={agreedToTerms} onChange={onCheckboxClick} />
      <Label onClick={onCheckboxClick}>
        I agree to{' '}
        <TermsLink href="" target="_blank">
          Terms and conditions
        </TermsLink>
      </Label>
    </BoxContainer>
  );
};
