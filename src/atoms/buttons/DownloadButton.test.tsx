import { render } from '@testing-library/react';
import DownloadButton from './DownloadButton';

it('should show the filename', () => {
  let downloadButton = render(<DownloadButton href="#" filename="example.jpg" />)

  expect(downloadButton.container.querySelector('a')).toBeTruthy();
  expect(downloadButton.getByText('example.jpg')).toBeTruthy();
})