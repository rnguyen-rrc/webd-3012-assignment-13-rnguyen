import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Dropdown from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

describe('Dropdown Component', () => {
  test('renders dropdown with options', () => {
    render(<Dropdown options={sampleOptions} />);
    const option = screen.getByText('Option 1');
    expect(option).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown options={sampleOptions} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveStyle('background-color: #ccc');
  });
});
