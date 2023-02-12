import { render } from '@testing-library/react';
import UploadPage from './UploadPage';

global.ResizeObserver = require('resize-observer-polyfill')

it('should contain a form', () => {
  let uploadPage = render(<UploadPage title="Your Title" description="Your description" />);

  expect(uploadPage.getByText('Your Title')).toBeTruthy();
  expect(uploadPage.getByText('Your description')).toBeTruthy();
  expect(uploadPage.container.querySelector('form')).toBeTruthy();
})