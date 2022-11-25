import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  UserImage,
  Username,
  UserInfo,
  UserStats,
  UserStatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <Description>
        <UserImage>
          <img src={avatar} alt="User avatar" />
        </UserImage>
        <Username>{username}</Username>
        <UserInfo>@ {tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <UserStats>
        <UserStatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </UserStatsItem>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
