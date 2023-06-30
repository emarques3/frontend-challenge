// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import { Loading } from '.';

describe('The Loading component', () => {
  it('renders the correnct size', () => {
    const loading = render(<Loading size={20} />);
    const image = loading.getByTestId('test');
    expect(image.getAttribute('size')).toBe('20');
  });
});
