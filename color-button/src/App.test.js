import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('button has correct initial text and color', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button should be disabled when the checkbox is checked', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  // click the checkbox - checked
  fireEvent.click(checkbox);

  // check the button to be disabled
  expect(colorButton).toBeDisabled();

  // click the checkbox - unchecked
  fireEvent.click(checkbox);

  // check the button to be enabled
  expect(colorButton).toBeEnabled();
})

test('Clicked disabled button has gray background and reverts to Medium Violet Red', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
})

test('Clicked disabled button has gray background and reverts to Midnight Blue', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  // change button to Midnight Blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
})

describe('spaces before camerl-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})