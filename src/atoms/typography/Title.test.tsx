import { render } from '@testing-library/react';
import Title from './Title';

it('should contain H1 tag', () => {
  let title = render(<Title value="Image Service" />);

  expect(title.getByText('Image Service')).toBeTruthy();
  expect(title.container.querySelector('h1')).toBeTruthy();
});