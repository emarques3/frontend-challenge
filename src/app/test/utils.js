// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store';
import { UserFactory } from 'domains/user/data/testing/factories/userFactory';
import { ColorFactory } from 'domains/settings/data/testing/factories/colorFactory';

export function renderWithStore(component, preloadedState = {}) {
  const { user, color } = preloadedState;
  const initialState = {
    user: {
      ...UserFactory.make(user),
    },
    color: {
      ...ColorFactory.make(color),
    },
  };

  const store = setupStore(initialState);
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  return { store, ...render(component, { wrapper: Wrapper }) };
}
