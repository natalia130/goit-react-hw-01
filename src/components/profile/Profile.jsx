import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css["user-card"]}>
            <div>
                <img
                    className={css["user-img"]}
                    src={image}
                    alt="User avatar"
                />
                <p className={css["user-name"]}>{name}</p>
                <p className={css["user-tag"]}>@{tag}</p>
                <p className={css["user-location"]}>{location}</p>
            </div>
            <ul className={css["user-stats-list"]}>
                <li className={css["user-stats-item"]}>
                    <span className={css["user-stats-text"]}>Followers</span>
                    <span className={css["user-stats-data"]}>{stats.followers}</span>
                </li>
                <li className={css["user-stats-item"]}>
                    <span className={css["user-stats-text"]}>Views</span>
                    <span className={css["user-stats-data"]}>{stats.views}</span>
                </li>
                <li className={css["user-stats-item"]}>
                    <span className={css["user-stats-text"]}>Likes</span>
                    <span className={css["user-stats-data"]}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
