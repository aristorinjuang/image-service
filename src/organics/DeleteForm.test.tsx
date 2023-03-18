import { fireEvent, render } from '@testing-library/react';
import DeleteForm from './DeleteForm';
import UploadPageContext from '../contexts/UploadPageContext';
import { downloadList, setDownloadList, thumbnailCategories, setThumbnailCategories, setJPEG, setWebP } from '../testdata';

it('should contain a form tag', () => {
  let setThumbnailCategories = jest.fn();
  let deleteForm = render(
    <UploadPageContext.Provider value={{
      downloadList,
      setDownloadList,
      thumbnailCategories,
      setThumbnailCategories,
      setJPEG,
      setWebP
    }}>
      <DeleteForm name="thumbnail" height={300} width={300} quality={80} />
    </UploadPageContext.Provider>
  );

  fireEvent.change(deleteForm.container.querySelector('input[name="height"]')!, {
    target: {
      value: ['280'],
    },
  })
  fireEvent.change(deleteForm.container.querySelector('input[name="width"]')!, {
    target: {
      value: ['320'],
    },
  })
  fireEvent.change(deleteForm.container.querySelector('input[name="quality"]')!, {
    target: {
      value: ['100'],
    },
  })
  fireEvent.click(deleteForm.getByRole('button'))

  expect(deleteForm.container.querySelector('form[method="post"]')).toBeTruthy();
  expect(deleteForm.container).toContainHTML('value="thumbnail"');
  expect(setThumbnailCategories).toHaveBeenCalled();
})