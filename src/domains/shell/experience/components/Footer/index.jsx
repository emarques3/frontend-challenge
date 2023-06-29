import React from 'react';
import { Container, List, Item, ItemLink } from 'domains/shell/experience/components/Footer/styles';

export const Footer = () => (
  <Container>
    <List>
      <Item>
        Developed by{' '}
        <ItemLink href="https://github.com/emarques3" target="_blank">
          Eric Marques
        </ItemLink>
        {' - '}
        <ItemLink href="mailto:emarques3@gmail.com" target="_blank">
          emarques3@gmail.com
        </ItemLink>
      </Item>
    </List>
  </Container>
);
