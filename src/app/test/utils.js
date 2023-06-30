/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store';
import { UserFactory } from 'domains/user/data/testing/factories/userFactory';
import { ColorFactory } from 'domains/settings/data/testing/factories/colorFactory';

/**
 * Renders a component with optional store data.
 * @param `component` - The React component to be rendered.
 * @param `preloadedState` the object containing any desired customization on the state.
 * @returns an object containing the store and the resulting component wrapper.
 */
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

/**
 * Renders a React hook with optional store data.
 * @param `hook` - The React hook to be rendered.
 * @param `preloadedState` the object containing any desired customization on the state.
 * @returns an object containing the store and the resulting hook wrapper.
 */
export function renderHookWithStore(hook, preloadedState = {}) {
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

  return { store, ...renderHook(hook, { wrapper: Wrapper }) };
}
