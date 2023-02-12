import { render } from '@testing-library/react';
import Homepage from './Homepage';

global.ResizeObserver = require('resize-observer-polyfill')

it('should contain a form', () => {
  let homepage = render(<Homepage />);

  expect(homepage.getByText('Image Service')).toBeTruthy();
  expect(homepage.getByText('Convert any images to JPEG and WebP, compress them to 80%, resize, and generate thumbnails.')).toBeTruthy();
  expect(homepage.container.querySelector('form')).toBeTruthy();
})