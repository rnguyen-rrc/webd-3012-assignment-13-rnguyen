import styled from 'styled-components'

const StyledRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f9f9f9;
  }
`

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <StyledRow>{children}</StyledRow>
}

export default TableRow