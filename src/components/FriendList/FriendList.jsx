import PropTypes from 'prop-types';
import { Friend } from './Friend';
// import css from './FriendList.module.css';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
