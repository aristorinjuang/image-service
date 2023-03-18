import { render } from '@testing-library/react';
import AddIcon from './AddIcon';

it('should show the add icon', () => {
  let addIcon = render(<AddIcon />)

  expect(addIcon.container).toContainHTML('d="M12 4.5v15m7.5-7.5h-15"')
})