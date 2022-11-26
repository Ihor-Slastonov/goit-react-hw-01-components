import PropTypes from 'prop-types';
import {
  SectionStatistics,
  StatisticsTitle,
  StatisticsInfo,
  StatisticsInfoItem,
  StatisticsInfoLabel,
  StatisticsInfoPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsInfo>
        {stats.map(stat => (
          <StatisticsInfoItem key={stat.id} type={stat.label}>
            <StatisticsInfoLabel>{stat.label}</StatisticsInfoLabel>
            <StatisticsInfoPercentage>
              {stat.percentage}%
            </StatisticsInfoPercentage>
          </StatisticsInfoItem>
        ))}
      </StatisticsInfo>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
