import { renderWithStore } from 'app/test/utils';
import { ReviewInfo } from '.';

jest.mock('react-router-dom');

describe('The Result component', () => {
  it('renders the title', () => {
    const content = renderWithStore(<ReviewInfo />, {
      preloadedState: {
        user: {
          // TODO: make fields optional (set defaults)
          name: 'Jon Doe',
          email: 'a@b.c',
          password: '123',
          favoriteColor: 'blue',
          agreedToTerms: true,
          loading: true,
        },
      },
    });
    // TODO: add more, make it better
    expect(content.getByText('Jon Doe')).toBeDefined();
  });
});
