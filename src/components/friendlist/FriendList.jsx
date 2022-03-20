import style from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={style.friend_list}>
            {friends.map(friend =>
                <li className={style.item} key={friend.id}>
                    <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" style={{borderColor: friend.isOnline ? "green" : "gray"}}/>
                    <p className="name">{friend.name}</p>
                </li>
            )}
        </ul>
    )
}
