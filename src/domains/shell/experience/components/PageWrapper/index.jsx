import React from 'react';
import {
  Wrapper,
  Content,
  Header,
  Footer,
} from 'domains/shell/experience/components/PageWrapper/styles';
import { Header as HeaderComponent } from 'domains/shell/experience/components/Header';
import { Footer as FooterComponent } from 'domains/shell/experience/components/Footer';

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
