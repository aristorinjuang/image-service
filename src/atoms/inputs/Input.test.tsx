import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

it('should show the text input', () => {
  console.log = jest.fn();

  let input = render(<Input action={console.log} name="width" title="Width" placeholder="Width" />)
  let element = input.container.querySelector('input[type="text"]')!

  expect(element).toBeTruthy()
  expect(element).toContainHTML('name="width"')
  expect(element).toContainHTML('title="Width"')
  expect(element).toContainHTML('placeholder="Width"')

  fireEvent.change(element, {
    target: {
      value: ['100'],
    },
  })

  expect(console.log).toHaveBeenCalledWith('100');
})