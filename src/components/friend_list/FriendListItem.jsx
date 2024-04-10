import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img className={css["friend-img"]} src={avatar} alt="Avatar" width="48" />
            <p className={css["friend-name"]}>{name}</p>
            <p className={clsx("friend-status", isOnline ? css["friend-status-online"] : css["friend-status-offline"])}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>

    );
};

export default FriendListItem;