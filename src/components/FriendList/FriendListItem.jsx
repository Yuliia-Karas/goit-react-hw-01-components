import './FriendList.css';

export const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props
    return (
        <li className="item">
            <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

