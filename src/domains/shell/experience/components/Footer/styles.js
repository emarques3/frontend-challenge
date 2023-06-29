import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  display: inline;
`;

export const Item = styled.li`
  display: inline-block;
  margin-left: 20px;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #f55;

  &:hover {
    color: #f00;
  }
`;
