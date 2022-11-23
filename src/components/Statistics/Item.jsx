import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
import { StatisticsItem, Label, Percentage } from './Statistics.styled';

export const Item = ({ id, label, percentage }) => {
  return (
    <StatisticsItem key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsItem>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
