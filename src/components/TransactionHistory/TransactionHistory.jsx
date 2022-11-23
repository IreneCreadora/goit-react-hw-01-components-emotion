import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';
import { Container, Table, Th, Td, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <Tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
