import styled from 'styled-components'
import type { ThHTMLAttributes } from 'react'

const StyledTh = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  font-weight: bold;
  background-color: #f2f2f2;
`

export type TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>

const TableHeaderCell = (props: TableHeaderCellProps) => {
  return <StyledTh {...props} />
}

export default TableHeaderCell