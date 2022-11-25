import PropTypes from 'prop-types';
import {
  HistoryTable,
  TableHead,
  TableTitle,
  TableItem,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <HistoryTable>
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(item => (
          <TableRow key={item.id}>
            <TableItem>{item.type}</TableItem>
            <TableItem>{item.amount}</TableItem>
            <TableItem>{item.currency}</TableItem>
          </TableRow>
        ))}
      </tbody>
    </HistoryTable>
  );
};

TransactionHistory.protoTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
