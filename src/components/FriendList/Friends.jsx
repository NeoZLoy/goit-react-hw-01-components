import { FriendList } from "./FriendsList/FriendsList"
import friends from "../../data/friends"
import { FriendsWrapper } from "./Friends.styled"

export const Friends = () => {
    return (
        <FriendsWrapper>
            <FriendList friends = {friends} />
        </FriendsWrapper>
    )
}