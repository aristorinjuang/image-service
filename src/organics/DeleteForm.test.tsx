import { fireEvent, render } from '@testing-library/react';
import DeleteForm from './DeleteForm';
import UploadPageContext from '../contexts/UploadPageContext';
import { downloadList, setDownloadList, thumbnailCategories, setThumbnailCategories, setJPEG, setWebP } from '../testdata';

it('should contain a form tag', () => {
  let deleteForm = render(
    <UploadPageContext.Provider value={{
      downloadList,
      setDownloadList,
      thumbnailCategories,
      setThumbnailCategories,
      setJPEG,
      setWebP
    }}>
      <DeleteForm name="thumbnail" height={300} width={300} />
    </UploadPageContext.Provider>
  );

  fireEvent.click(deleteForm.getByRole('button'))

  expect(deleteForm.container.querySelector('form[method="post"]')).toBeTruthy();
  expect(deleteForm.container).toContainHTML('value="thumbnail"');
  expect(deleteForm.container).toContainHTML('value="300"');
  expect(deleteForm.container).toContainHTML('value="300"');
})