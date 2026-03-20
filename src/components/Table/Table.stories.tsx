import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
  TableHeaderCell,
} from './index'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  backgroundColor: { control: 'color' },
  textColor: { control: 'color' },
  disabled: { control: 'boolean' },
},
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    disabled: false,
    children: (
      <>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Age</TableHeaderCell>
                <TableHeaderCell>Address</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Phone</TableHeaderCell>
            </TableRow>
        </TableHeader>

        <tbody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>25</TableCell>
            <TableCell>123 Main St</TableCell>
            <TableCell>john@email.com</TableCell>
            <TableCell>204-000-0000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>30</TableCell>
            <TableCell>456 Portage Ave</TableCell>
            <TableCell>jane@email.com</TableCell>
            <TableCell>204-000-0101</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Smith</TableCell>
            <TableCell>45</TableCell>
            <TableCell>789 Happy Ave</TableCell>
            <TableCell>smith@email.com</TableCell>
            <TableCell>204-000-1111</TableCell>
          </TableRow>
        </tbody>

        <TableFooter>
          <TableRow>
            <TableCell>Total Rows</TableCell>
            <TableCell>3</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>           
          </TableRow>
        </TableFooter>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: Default.args?.children,
  },
}