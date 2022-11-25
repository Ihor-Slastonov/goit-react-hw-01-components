import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  padding: 4px;
  width: 300px;
  border: 2px solid #393e46;
  background-color: #6d9886;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 250ms linear;
  :hover {
    box-shadow: 0px 5px 11px 0px rgba(0, 0, 0, 0.6);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;

  margin-bottom: 10px;
  background-color: #f2e7d5;
  border-radius: 4px;
`;

export const UserImage = styled.div`
  height: 200px;
  width: 200px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid #393e46;
  overflow: hidden;
  background-color: #6d9886;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.6);
`;

export const Username = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #393e46;
`;

export const UserInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #5f6773;
  letter-spacing: 0.03em;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding: 8px;
  background-color: #f2e7d5;
  border-radius: 4px;
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsLabel = styled.span`
  margin-bottom: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #393e46;
`;
export const StatsQuantity = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #5f6773;
`;
