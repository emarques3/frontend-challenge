import { renderHookWithStore } from 'app/test/utils';

import { useUser } from 'domains/user/data/hooks/useUser';
import { submitUserData } from 'domains/user/data/api';

jest.mock('react-router-dom');

jest.mock('domains/user/data/api', () => ({
  submitUserData: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('The useUser hook', () => {
  it('is initialized ith the right data', () => {
    const { result } = renderHookWithStore(() => useUser(), {
      user: {
        name: 'Jon Doe',
        email: 'j@d.c',
        password: '123456',
        favoriteColor: 'red',
        agreedToTerms: true,
        loading: true,
      },
    });
    expect(result.current.userName).toBe('Jon Doe');
    expect(result.current.userEmail).toBe('j@d.c');
    expect(result.current.userPassword).toBe('123456');
    expect(result.current.favoriteColor).toBe('red');
    expect(result.current.agreedToTerms).toBe(true);
    expect(result.current.loading).toBe(true);
  });

  it('masks the password correctly', () => {
    const { result } = renderHookWithStore(() => useUser(), {
      user: {
        password: '123456789',
      },
    });
    expect(result.current.passwordDigits).toBe('•••••••••');
  });

  it('submits the data', () => {
    const { result } = renderHookWithStore(() => useUser(), {
      user: {
        name: 'Jon Doe',
        email: 'j@d.c',
        password: '123456',
        favoriteColor: 'red',
        agreedToTerms: true,
        loading: true,
      },
    });

    result.current.submit();

    expect(submitUserData).toHaveBeenCalledWith({
      name: 'Jon Doe',
      email: 'j@d.c',
      password: '123456',
      color: 'red',
      terms: true,
    });
  });
});
