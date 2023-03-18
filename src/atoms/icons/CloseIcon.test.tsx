import { render } from '@testing-library/react';
import CloseIcon from './CloseIcon';

it('should show the close icon', () => {
  let closeIcon = render(<CloseIcon />)

  expect(closeIcon.container).toContainHTML('d="M6 18L18 6M6 6l12 12"')
})