import styled, { css } from 'styled-components';

const headerFooter = css`
  height: 75px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

export const Header = styled.div`
  ${headerFooter}
  background-color: #ddd;
`;

export const Content = styled.div`
  flex: auto;
  width: 50%;
  min-width: 240px;
  margin: auto;
`;

export const Footer = styled.div`
  ${headerFooter}
  background-color: #333;
`;
