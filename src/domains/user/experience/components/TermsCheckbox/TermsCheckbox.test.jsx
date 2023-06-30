import { fireEvent } from '@testing-library/react';
import { renderWithStore } from 'app/test/utils';
import { TermsCheckbox } from 'domains/user/experience/components/TermsCheckbox';

jest.mock('react-router-dom');

describe('The Terms Checkbox component', () => {
  it('renders with "checked"', () => {
    const content = renderWithStore(<TermsCheckbox />, {
      user: {
        agreedToTerms: true,
      },
    });
    expect(content.getByTestId('test').checked).toBe(true);
  });

  it('renders with "unchecked"', () => {
    const content = renderWithStore(<TermsCheckbox />, {
      user: {
        agreedToTerms: false,
      },
    });
    expect(content.getByTestId('test').checked).toBe(false);
  });

  it('changes correctly', () => {
    const { getByTestId } = renderWithStore(<TermsCheckbox />, {
      user: {
        agreedToTerms: false,
      },
    });

    const checkbox = getByTestId('test');
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
