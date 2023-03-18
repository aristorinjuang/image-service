import { render } from '@testing-library/react';
import SubmitButton from './SubmitButton';

it('should show the submit button', () => {
  let submitButton = render(<SubmitButton />)

  expect(submitButton.container.querySelector('button[type="submit"]')).toBeTruthy();
})