import {List} from "./FriendsList.styled"

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => (
                <li key = {friend.id}>
                    <span>{friend.isOnline}</span>
                    <img src={friend.avatar} alt="Friend Avatar" />
                    <p>{friend.name}</p>
                </li>
            ))}
        </List>
    )
}