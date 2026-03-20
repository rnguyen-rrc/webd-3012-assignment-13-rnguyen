import styled from 'styled-components';

const StyledTfoot = styled.tfoot`
  background-color: #f0f0f0;
  font-weight: bold;
`;

const TableFooter = ({ children }: { children: React.ReactNode }) => {
  return <StyledTfoot>{children}</StyledTfoot>;
};

export default TableFooter;
