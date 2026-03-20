import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  test('renders card title and content', () => {
    render(<Card title="Test Title" content="Test Card Content" />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Card Content')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <Card title="Disabled Title" content="Disabled Card Content" disabled />,
    );

    const card = screen.getByTestId('card-wrapper');
    expect(card).toHaveStyle('background-color: #ccc');
  });
});
