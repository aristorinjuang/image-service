import { fireEvent, render } from '@testing-library/react';
import AddForm from './AddForm';

it('should contain a form tag', () => {
  let addForm = render(<AddForm />);

  fireEvent.click(addForm.getByRole('button'))

  expect(addForm.container).toContainHTML('method="post"')
  expect(addForm.container).toContainHTML('value=""')
})