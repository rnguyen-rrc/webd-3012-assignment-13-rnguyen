import styled from 'styled-components';

const StyledThead = styled.thead`
  background-color: #f5f5f5;
`;

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <StyledThead>{children}</StyledThead>;
};

export default TableHeader;
