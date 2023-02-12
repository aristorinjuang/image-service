import { render } from '@testing-library/react';
import ImageComparison from './ImageComparison';

global.ResizeObserver = require('resize-observer-polyfill')

it('should contain no img tags', () => {
  let imageComparison = render(<ImageComparison jpeg='' webp='' />);

  expect(imageComparison.container.querySelectorAll('img')).toHaveLength(0);
})

it('should contain two img tags', () => {
  let imageComparison = render(<ImageComparison jpeg='https://via.placeholder.com/150' webp='https://via.placeholder.com/150' />);

  expect(imageComparison.container.querySelectorAll('img')).toHaveLength(2);
})