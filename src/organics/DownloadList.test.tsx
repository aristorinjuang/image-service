import { render } from '@testing-library/react';
import DownloadList from './DownloadList';
import { Props } from "../atoms/buttons/DownloadButton";

it('should be ul tag', () => {
  let downloadItems: Props[] = [{
    filename: 'example.jpg',
    href: '#'
  }]
  let downloadList = render(<DownloadList downloadList={downloadItems} />)

  expect(downloadList.container.querySelector('ul')).toBeTruthy();
})