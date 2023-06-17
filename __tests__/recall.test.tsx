import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import Recall from '@/components/recall';
import { customersAPI } from '@/firebase';

let customersAPIMock = jest.spyOn(customersAPI, 'add');

describe('Recall', () => {
  beforeEach(() => {
    render(<Recall />);
    customersAPIMock.mockClear();
  });

  it('types an invalid phone number', async () => {
    const wrongPhone = 'Blah-blah-blah';

    const phoneInput = screen.getByLabelText('Phone input');
    const submitBtn = screen.getByRole('button', {
      name: 'Send',
    });

    await user.type(phoneInput, wrongPhone);

    expect(submitBtn).toBeDisabled();
  });

  it('types a phone number and then click the submit button', async () => {
    const phone = '+79999999999';

    const phoneInput = screen.getByLabelText('Phone input');
    const submitBtn = screen.getByRole('button', {
      name: 'Send',
    });

    await user.type(phoneInput, phone);
    await user.click(submitBtn);

    expect(customersAPIMock).toHaveBeenCalledWith({
      phone,
      type: 'recall'
    });
  });
});