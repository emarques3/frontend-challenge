// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store';

export function renderWithStore(
  ui,
  {
    preloadedState = {
      user: {
        name: '111',
        email: '222',
        password: '333',
        favoriteColor: '444',
        agreedToTerms: true,
        loading: true,
      },
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
