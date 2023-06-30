// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { store } from 'app/store';
import { Provider } from 'react-redux';

export const renderWithStore = (children) => render(<Provider store={store}>{children}</Provider>);
