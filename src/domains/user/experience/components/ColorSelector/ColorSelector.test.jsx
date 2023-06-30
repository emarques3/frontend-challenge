import { fireEvent } from '@testing-library/react';
import { renderWithStore } from 'app/test/utils';
import { ColorSelector } from 'domains/user/experience/components/ColorSelector';

jest.mock('react-router-dom');

describe('The Color Selector component', () => {
  it('renders the right selected value', () => {
    const { getAllByTestId } = renderWithStore(<ColorSelector />, {
      user: {
        favoriteColor: 'green',
      },
      color: {
        colorsArray: ['red', 'green', 'blue'],
      },
    });

    const options = getAllByTestId('option');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });

  it('changes the selected value', () => {
    const { getByTestId, getAllByTestId } = renderWithStore(<ColorSelector />, {
      user: {
        favoriteColor: 'green',
      },
      color: {
        colorsArray: ['red', 'green', 'blue'],
      },
    });

    const options = getAllByTestId('option');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy(); // green
    expect(options[2].selected).toBeFalsy();

    fireEvent.change(getByTestId('select'), { target: { value: 'blue' } });

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy(); // blue
  });
});
