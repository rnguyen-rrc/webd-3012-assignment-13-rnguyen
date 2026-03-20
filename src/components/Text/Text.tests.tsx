import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Text from './Text';

describe('Text Component', () => {
  test('renders text content', () => {
    render(<Text text="Test Text" />);
    const textElement = screen.getByText('Test Text');
    expect(textElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Text text="Disabled Text" disabled />);
    const textElement = screen.getByText('Disabled Text');
    expect(textElement).toHaveStyle('background-color: #ccc');
  });
});
