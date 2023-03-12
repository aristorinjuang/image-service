import { fireEvent, render } from '@testing-library/react';
import UploadPageContext from '../../contexts/UploadPageContext';
import { Props } from "../../atoms/buttons/DownloadButton";
import _File from './File';

it('should contain a file input and succeed upload an image', () => {
  let downloadList: Props[] = []
  let setJPEG = (value: string) => {}
  let setWebP = (value: string) => {}
  let file = render(
    <UploadPageContext.Provider value={{downloadList, setJPEG, setWebP}}>
      <_File />
    </UploadPageContext.Provider>
  );
  let element = file.container.querySelector('input[type="file"]')!

  fireEvent.change(element, {
    target: {
      files: [new File(['(⌐□_□)'], 'chucknorris.png', {type: 'image/png'})],
    },
  })

  expect(file.container).toContainHTML('type="file"');
});