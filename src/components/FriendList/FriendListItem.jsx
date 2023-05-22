import css from './FriendList.module.css';


export const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props
    const statusStyle = isOnline ? css.online : css.offline;

    return (
        <li className={css.item}>

            {/* <span className={`status ${isOnline ? 'online' : 'offline'}`}/> */}
            <span className={`${statusStyle} ${css.status}`}/>

            {/* <span className={clsx(css["status"],{[css.online]:isOnline, [css.offline]:!isOnline})}/> */}
             
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

