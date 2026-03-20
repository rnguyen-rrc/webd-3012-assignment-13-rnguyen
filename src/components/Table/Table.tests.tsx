import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Table, TableRow, TableCell } from './index';

describe('Table Component', () => {
  test('renders table content', () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Test Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );

    const cell = screen.getByText('Test Cell');
    expect(cell).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <TableRow>
            <TableCell>Disabled Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );

    const table = screen.getByTestId('table-wrapper');
    expect(table).toHaveStyle('background-color: #ccc');
  });
});
