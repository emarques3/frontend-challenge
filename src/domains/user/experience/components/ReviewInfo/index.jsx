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
        <InfoItem>First Name: {userName}</InfoItem>
        <InfoItem>E-mail: {userEmail}</InfoItem>
        <InfoItem>Password: {passwordDigits}</InfoItem>
        <InfoItem>Favorite Color: {favoriteColor}</InfoItem>
        <InfoItem>Terms and Conditions: {agreedToTerms ? 'agreed' : 'not agreed'}</InfoItem>
      </List>
    </ReviewContainer>
  );
};
