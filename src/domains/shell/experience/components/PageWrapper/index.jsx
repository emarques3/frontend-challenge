import React from 'react';
import {
  Content,
  Footer,
  Header,
  Wrapper,
} from 'domains/shell/experience/components/PageWrapper/styles';
import { Footer as FooterComponent } from 'domains/shell/experience/components/Footer';
import { Header as HeaderComponent } from 'domains/shell/experience/components/Header';

export const PageWrapper = ({ children }) => (
  <Wrapper>
    <Header>
      <HeaderComponent />
    </Header>
    <Content>{children}</Content>
    <Footer>
      <FooterComponent />
    </Footer>
  </Wrapper>
);
