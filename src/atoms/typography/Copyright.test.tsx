import { render } from '@testing-library/react';
import Copyright from './Copyright';

it('should contain a p tag', () => {
  let copyright = render(<Copyright />);

  expect(copyright.container.querySelector('p')).toBeTruthy();
});