import React from 'react';
import { Spinner } from 'domains/shell/experience/components/Loading/styles';

export const Loading = () => (
  <Spinner viewBox="0 0 50 50">
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
  </Spinner>
);
