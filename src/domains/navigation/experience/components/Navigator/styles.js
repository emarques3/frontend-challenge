import styled from 'styled-components';

export const NavigatorContainer = styled.div`
  margin-top: 50px;
`;

export const Button = styled.a`
  border: solid 1px #caa;
  background-color: ${(props) => (props.disabled ? '#ffefef' : '#fcc')};
  color: ${(props) => (props.disabled ? '#aaa' : '#b00')};
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ffefef' : '#faa')};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  }
`;
