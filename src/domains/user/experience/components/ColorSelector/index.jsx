import React, { useState } from 'react';
import {
  SelectorContainer,
  Selector,
  Option,
} from 'domains/user/experience/components/ColorSelector/styles';
import { useUser } from 'domains/user/data/hooks/useUser';
import { useColors } from 'domains/settings/data/hooks/useColors';
import { Loading } from 'domains/shell/experience/components/Loading';

export const ColorSelector = () => {
  const { favoriteColor, setFavoriteColor } = useUser();
  const { colors, loading } = useColors();

  const [color, setColor] = useState(favoriteColor);

  const onChangeColor = (e) => {
    setColor(e.target.value);
    setFavoriteColor({ favoriteColor: e.target.value });
  };

  return (
    <SelectorContainer>
      Color:
      <Selector onChange={onChangeColor} {...{ disabled: loading }} value={color}>
        <Option value="">Select your favorite color</Option>
        {colors.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Selector>
      {loading ? <Loading /> : null}
    </SelectorContainer>
  );
};
