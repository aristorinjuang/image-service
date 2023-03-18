import { render } from '@testing-library/react';
import Issue from './Issue';

it('should contain an issue link', () => {
  let issue = render(<Issue />);

  expect(issue.container).toContainHTML('https://github.com/aristorinjuang/image-service/issues')
});