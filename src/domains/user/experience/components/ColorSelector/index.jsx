import React, { useState } from 'react';
import {
  SelectorContainer,
  Selector,
  Option,
} from 'domains/user/experience/components/ColorSelector/styles';
import { useUser } from 'domains/user/data/hooks/useUser';

export const ColorSelector = () => {
  const { favoriteColor, setFavoriteColor } = useUser();

  const [color, setColor] = useState(favoriteColor);

  const onChangeColor = (e) => {
    setColor(e.target.value);
    setFavoriteColor({ favoriteColor: e.target.value });
  };

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
