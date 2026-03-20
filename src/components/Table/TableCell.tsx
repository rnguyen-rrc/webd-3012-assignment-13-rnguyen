import styled from 'styled-components'
import type { TdHTMLAttributes } from 'react'

const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>

const TableCell = (props: TableCellProps) => {
  return <StyledTd {...props} />
}

export default TableCell