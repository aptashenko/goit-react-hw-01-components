import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (
                    <li className={css.item} key={friend.id}>
                        <span className={`${css.status} ${friend.isOnline && css.online}`} >{friend.isOnline}</span>
                        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{friend.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    friend: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number,
    })
}