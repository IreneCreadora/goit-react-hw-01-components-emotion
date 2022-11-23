import PropTypes from 'prop-types';
import { Item } from './Item';
// import css from './Statistics.module.css';
import { Container, Title, StatisticsList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
