import React from 'react';
import { Container, List, Item, ItemLink } from 'domains/shell/experience/components/Header/styles';

export const Header = () => (
  <Container>
    <List>
      <Item>
        <ItemLink
          href="https://github.com/emarques3/frontend-challenge/tree/ericmarques-solution"
          target="_blank"
        >
          Source code
        </ItemLink>
      </Item>
      <Item>
        <ItemLink
          href="https://github.com/emarques3/frontend-challenge/blob/ericmarques-solution/INTRODUCTION.md"
          target="_blank"
        >
          Introduction
        </ItemLink>
      </Item>
    </List>
  </Container>
);
