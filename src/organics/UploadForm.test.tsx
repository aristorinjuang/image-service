import { render } from '@testing-library/react';
import UploadForm from './UploadForm';

it('should contain a form tag', () => {
  let uploadForm = render(<UploadForm />);

  expect(uploadForm.container.querySelector('form')).toBeTruthy();
})