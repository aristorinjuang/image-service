import { fireEvent, render } from '@testing-library/react';
import UploadPageContext from '../../contexts/UploadPageContext';
import _File from './File';
import Resizer from "react-image-file-resizer";
import { downloadList, setDownloadList, thumbnailCategories, setThumbnailCategories, setJPEG, setWebP } from '../../testdata';

it('should contain a file input and succeed upload an image', () => {
  let file = new File(['(⌐□_□)'], 'chucknorris.png', {type: 'image/png'})
  let resizerSpy = jest.spyOn(Resizer, 'imageFileResizer')

  let _file = render(
    <UploadPageContext.Provider value={{
      downloadList,
      setDownloadList,
      thumbnailCategories,
      setThumbnailCategories,
      setJPEG,
      setWebP
    }}>
      <_File />
    </UploadPageContext.Provider>
  );
  let element = _file.container.querySelector('input[type="file"]')!

  fireEvent.change(element, {
    target: {
      files: [file],
    },
  })

  expect(_file.container).toContainHTML('type="file"');
  expect(resizerSpy).toHaveBeenCalled();
});