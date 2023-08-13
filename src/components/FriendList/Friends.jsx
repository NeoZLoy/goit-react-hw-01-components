import { FriendsWrapper, List, ListItem  } from "./Friends.styled"
import { FriendItem,  } from "./FriendItem/FriendItem"
export const Friends = ({friends}) => {
    return (
        <FriendsWrapper>
            <List>
            {friends.map(friend => (
                <ListItem key = {friend.id}>
                   <FriendItem friend={friend}/>
                </ListItem>
            ))}
        </List>
        </FriendsWrapper>
    )
}