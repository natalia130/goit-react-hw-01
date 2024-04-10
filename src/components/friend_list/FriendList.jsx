import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={css["friends-list"]}>
            {friends.map((friend) => {
                return (
                    <li className={css["friends-item"]} key={friend.id}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default FriendList;
