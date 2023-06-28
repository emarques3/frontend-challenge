import React from 'react';
import { Container, List, Item, ItemLink } from 'domains/shell/experience/components/Header/styles';

export const Header = () => (
  <Container>
    <List>
      <Item>
        <ItemLink href="https://github.com/emarques3" target="_blank">
          Developed by Eric Marques
        </ItemLink>
      </Item>
    </List>
  </Container>
);
