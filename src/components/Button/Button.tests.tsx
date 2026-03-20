import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label="Test Button" />);
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toHaveStyle('background-color: #ccc');
  });
});
