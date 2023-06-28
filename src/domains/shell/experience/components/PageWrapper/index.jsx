import React from 'react';
import {
  Wrapper,
  Content,
  Header,
  Footer,
} from 'domains/shell/experience/components/PageWrapper/styles';
import { Header as HeaderComponent } from 'domains/shell/experience/components/Header';

export const PageWrapper = ({ children }) => (
  <Wrapper>
    <Header>
      <HeaderComponent />
    </Header>
    <Content>{children}</Content>
    <Footer></Footer>
  </Wrapper>
);
