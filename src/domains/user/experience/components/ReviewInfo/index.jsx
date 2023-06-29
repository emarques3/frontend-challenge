import React from 'react';
import {
  ReviewContainer,
  List,
  InfoItem,
} from 'domains/user/experience/components/ReviewInfo/styles';
import { useUser } from 'domains/user/data/hooks/useUser';

export const ReviewInfo = () => {
  const { userName, userEmail, passwordDigits, favoriteColor, agreedToTerms } = useUser();

  return (
    <ReviewContainer>
      <List>
        <InfoItem>
          First Name: <strong>{userName}</strong>
        </InfoItem>
        <InfoItem>
          E-mail: <strong>{userEmail}</strong>
        </InfoItem>
        <InfoItem>
          Password: <strong>{passwordDigits}</strong>
        </InfoItem>
        <InfoItem>
          Favorite Color: <strong>{favoriteColor}</strong>
        </InfoItem>
        <InfoItem>
          Terms and Conditions: <strong>{agreedToTerms ? 'agreed' : 'not agreed'}</strong>
        </InfoItem>
      </List>
    </ReviewContainer>
  );
};
