import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormContent from './FormContent';
import { act } from 'react-dom/test-utils';

describe('Content', () => {
  it('should render form', () => {
    const { container } = render(<FormContent />);
    expect(container).toMatchSnapshot();
  });
  it('should set value to name input', async () => {
    render(<FormContent />);
    const nameInput = screen.getByPlaceholderText(/type your name/i) as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i);
    const testValue = 'John';
    await act(() => {
      fireEvent.change(nameInput, { target: { value: testValue } });
      fireEvent.click(submitButton);
    });
    expect(nameInput.value).toEqual(testValue);
  });
  it('should throw error in case of invalid name', async () => {
    render(<FormContent />);
    const nameInput = screen.getByPlaceholderText(/type your name/i) as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i);
    const fakeValue = '1234';
    fireEvent.change(nameInput, { target: { value: fakeValue } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText('The field should contain only letters.')).toBeInTheDocument();
    });
  });
  it('should set date to date input', async () => {
    render(<FormContent />);
    const dateInput = screen.getByLabelText(/birth date/i) as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i);
    const date = '2022-09-27';
    await act(() => {
      fireEvent.change(dateInput, { target: { value: date } });
      fireEvent.click(submitButton);
    });
    expect(dateInput.value).toEqual(date);
  });
  it('should throw error in case of invalid date', async () => {
    render(<FormContent />);
    const dateInput = screen.getByLabelText(/birth date/i) as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i);
    const date = '2045-09-27';
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/select a valid date/i)).toBeInTheDocument();
    });
  });
  it('should not throw an error in case of checked switcher', () => {
    const { container } = render(<FormContent />);
    const switcher = container.querySelector('.input__switcher') as HTMLInputElement;
    expect(switcher.checked).toEqual(false);
    fireEvent.click(switcher);
    expect(switcher.checked).toEqual(true);
  });
  it('should not throw an error in case of checked checkbox', () => {
    const { container } = render(<FormContent />);
    const checkbox = container.querySelector('.input__checkbox') as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
  it('should enable submit button on form changing', () => {
    const { container } = render(<FormContent />);
    const nameInput = container.querySelector('.text__input') as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i) as HTMLButtonElement;
    const testString = 'John';
    expect(submitButton.disabled).toEqual(true);
    fireEvent.change(nameInput, { target: { value: testString } });
    expect(submitButton.disabled).toEqual(false);
  });
});
