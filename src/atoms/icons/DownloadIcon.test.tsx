import { render } from '@testing-library/react';
import DownloadIcon from './DownloadIcon';

it('should show the download icon', () => {
  let downloadIcon = render(<DownloadIcon />)

  expect(downloadIcon.container).toContainHTML('d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"')
})