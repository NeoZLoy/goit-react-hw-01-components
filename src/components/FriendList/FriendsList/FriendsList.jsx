import {List, FriendImg, ListItem, FriendStatus, FriendName} from "./FriendsList.styled"

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => (
                <ListItem key = {friend.id}>
                    <FriendStatus $isOnline = {friend.isOnline}> </FriendStatus>
                    <FriendImg src={friend.avatar} alt="Friend Avatar" />
                    <FriendName>{friend.name}</FriendName>
                </ListItem>
            ))}
        </List>
    )
}