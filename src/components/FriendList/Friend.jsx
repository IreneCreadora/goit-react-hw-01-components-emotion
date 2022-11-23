import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const Friend = ({ name, avatar, isOnline }) => {
  return (
    <FriendItem>
      <Status
      // className={
      //   isOnline
      //     ? `${css.status} ${css.online}`
      //     : `${css.status} ${css.offline}`
      // }
      // className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
