import { render } from '@testing-library/react';
import Description from './Description';

it('should contain a p tag', () => {
  let description = render(<Description value="Lorem ipsum..." />);

  expect(description.container).toContainHTML('Lorem ipsum...')
  expect(description.container.querySelector('p')).toBeTruthy();
});