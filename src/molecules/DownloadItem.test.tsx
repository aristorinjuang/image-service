import { render } from '@testing-library/react';
import DownloadItem from './DownloadItem';

it('should be li tag', () => {
  let downloadItem = render(<DownloadItem  href="#" filename="example.jpg" />)

  expect(downloadItem.container.querySelector('li')).toBeTruthy();
})