import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial text and color', () => {
  render(<App/>);

  // find an element with a role of button and text of 'Change of blue
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button should be disabled when the checkbox is checked', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // click the checkbox - checked
  fireEvent.click(checkbox);

  // check the button to be disabled
  expect(colorButton).toBeDisabled();

  // click the checkbox - unchecked
  fireEvent.click(checkbox);

  // check the button to be enabled
  expect(colorButton).toBeEnabled();
})

test('Clicked disabled button has gray background and reverts to red', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
})

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
})