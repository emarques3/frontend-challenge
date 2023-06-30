import { renderWithStore } from 'app/test/utils';
import { ReviewInfo } from '.';

jest.mock('react-router-dom');

describe('The Review Info component', () => {
  it('renders the properties', () => {
    const content = renderWithStore(<ReviewInfo />, {
      user: {
        name: 'Jon Doe',
        email: 'a@b.c',
      },
    });
    expect(content.getByText('Jon Doe')).toBeDefined();
    expect(content.getByText('a@b.c')).toBeDefined();
  });
});
