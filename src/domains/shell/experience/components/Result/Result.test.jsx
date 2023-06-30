import { renderWithStore } from 'app/test/utils';
import { Result } from '.';

jest.mock('react-router-dom');

describe('The Result component', () => {
  it('renders the title', () => {
    const content = renderWithStore(<Result title="Some title" />);
    expect(content.getByText('Some title')).toBeDefined();
  });

  it('renders the message', () => {
    const content = renderWithStore(<Result message="Some message" />);
    expect(content.getByText('Some message')).toBeDefined();
  });

  it('renders the icon', () => {
    const content = renderWithStore(<Result iconPath="some/path" />);
    expect(content.getByTestId('test').getAttribute('src')).toBe('some/path');
  });
});
