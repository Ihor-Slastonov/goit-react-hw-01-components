import styled from '@emotion/styled';

export const HistoryTable = styled.table`
  width: 600px;
  border-collapse: collapse;
  background-color: #f2e7d5;
`;
export const TableHead = styled.thead`
  background-color: #6d9886;
`;
export const TableTitle = styled.th`
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid #ffffff;
  color: #ffffff;
`;
export const TableItem = styled.td`
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  border: 2px solid #ffffff;
`;
export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f7f7f7;
  }
`;
