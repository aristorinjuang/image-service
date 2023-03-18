import { render } from '@testing-library/react';
import App from './App';

it('should contain a form', () => {
  let homepage = render(<App />);

  expect(homepage.container.querySelector('form')).toBeTruthy();
})