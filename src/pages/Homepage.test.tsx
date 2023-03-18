import { render } from '@testing-library/react';
import Homepage from './Homepage';

it('should contain a form', () => {
  process.env.REACT_APP_TITLE = 'Image Service'

  let homepage = render(<Homepage />);

  expect(homepage.getByText('Image Service')).toBeTruthy();
  expect(homepage.getByText('Convert any images to JPEG and WebP, compress, resize, and generate thumbnails.')).toBeTruthy();
  expect(homepage.container.querySelector('form')).toBeTruthy();
})