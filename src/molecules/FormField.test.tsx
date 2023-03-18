import { render } from '@testing-library/react';
import FormField from './FormField';
import Input from '../atoms/inputs/Input';

it('should render the p tag', () => {
  let formField = render(<FormField><Input name="name" title="Name" placeholder="Name" /></FormField>)

  expect(formField.container.querySelector('p')).toBeTruthy();
})