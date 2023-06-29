import React from 'react';
import {
  Button,
  NavigatorContainer,
} from 'domains/navigation/experience/components/Navigator/styles';

export const Navigator = ({ buttons }) => (
  <NavigatorContainer>
    {buttons?.map(({ label, onClick, disabled }) => (
      <Button key={label} onClick={onClick} disabled={disabled}>
        {label}
      </Button>
    ))}
  </NavigatorContainer>
);
