import PropTypes from 'prop-types';
import {
  Friends,
  FriendsItem,
  FriendsStatus,
  FriendsName,
} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <FriendsStatus status={friend.isOnline}></FriendsStatus>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <FriendsName>{friend.name}</FriendsName>
        </FriendsItem>
      ))}
    </Friends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
