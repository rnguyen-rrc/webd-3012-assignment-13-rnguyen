import styled from 'styled-components'
import type { TableProps } from './Table.types'

const StyledTable = styled.table<{
  $backgroundColor?: string
  $textColor?: string
  $disabled?: boolean
}>`
  width: 100%;
  border-collapse: collapse;
  display: block;
  overflow-x: auto;

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || '#ffffff'};

  color: ${({ $textColor, $disabled }) =>
    $disabled ? '#666' : $textColor || '#000'};

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const Table = ({
  children,
  backgroundColor,
  textColor,
  disabled = false,
}: TableProps) => {
  return (
    <StyledTable
      data-testid="table-wrapper"
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $disabled={disabled}
    >
      {children}
    </StyledTable>
  )
}

export default Table