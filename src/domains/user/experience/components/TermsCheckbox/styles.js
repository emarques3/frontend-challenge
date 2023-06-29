import styled from 'styled-components';

export const BoxContainer = styled.div`
  margin-top: 20px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

export const TermsLink = styled.a`
  color: #b00;
  text-decoration: none;

  &:hover {
    color: #f99;
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;
