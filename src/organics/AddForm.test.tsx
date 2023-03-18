import { fireEvent, render } from '@testing-library/react';
import AddForm from './AddForm';

it('should contain a form tag', () => {
  let addForm = render(<AddForm />);
  let inputName = addForm.getByTitle('Name')
  let inputHeight = addForm.getByTitle('Height')
  let inputWidth = addForm.getByTitle('Width')
  let inputQuality = addForm.getByTitle('Quality')

  fireEvent.change(inputName, {
    target: {
      value: ['thumbnail'],
    },
  })
  fireEvent.change(inputHeight, {
    target: {
      value: ['-1'],
    },
  })
  fireEvent.change(inputHeight, {
    target: {
      value: ['1080'],
    },
  })
  fireEvent.change(inputWidth, {
    target: {
      value: ['-1'],
    },
  })
  fireEvent.change(inputWidth, {
    target: {
      value: ['1920'],
    },
  })
  fireEvent.change(inputQuality, {
    target: {
      value: ['110'],
    },
  })
  fireEvent.change(inputQuality, {
    target: {
      value: ['-10'],
    },
  })
  fireEvent.change(inputQuality, {
    target: {
      value: ['100'],
    },
  })
  fireEvent.click(addForm.getByRole('button'))

  expect(addForm.container).toContainHTML('method="post"')
  expect(addForm.container).toContainHTML('value=""')
})