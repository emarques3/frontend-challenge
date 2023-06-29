import React, { useState } from 'react';
import {
  SelectorContainer,
  Selector,
  Option,
} from 'domains/user/experience/components/ColorSelector/styles';
import { useUser } from 'domains/user/data/hooks/useUser';
// import { useNavigate } from 'react-router-dom';
// import SignupRoute from 'pages/Signup/route';

export const ColorSelector = () => {
  // const navigate = useNavigate();
  const { chosenColor, setChosenColor } = useUser();

  const [color, setColor] = useState(chosenColor);

  const onChangeColor = (e) => {
    setColor(e.target.value);
    setChosenColor({ chosenColor: e.target.value });
  };

  // const onClickBack = () => {
  //   navigate(SignupRoute.path);
  // };

  // const onClickNext = () => {
  //   navigate(SignupRoute.path);
  // };

  return (
    <SelectorContainer>
      Color:
      <Selector onChange={onChangeColor}>
        <Option value="red" selected={color === 'red'}>
          Red
        </Option>
        <Option value="green" selected={color === 'green'}>
          Green
        </Option>
      </Selector>
    </SelectorContainer>
  );
};
