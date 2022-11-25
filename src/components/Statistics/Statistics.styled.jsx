import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  width: 300px;
  border: 2px solid #393e46;
  border-radius: 4px;
  background-color: #6d9886;
`;

export const StatisticsTitle = styled.h2`
  margin: 30px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const StatisticsInfo = styled.ul`
  display: flex;
  align-items: center;
  border-top: 2px solid #393e46;
  background-color: #f2e7d5;
`;

export const StatisticsInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  border-left: 1px solid #393e46;
  :first-of-type {
    border-left: none;
  }
`;

export const StatisticsInfoLabel = styled.span`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #5f6773;
`;

export const StatisticsInfoPercentage = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #393e46;
`;
