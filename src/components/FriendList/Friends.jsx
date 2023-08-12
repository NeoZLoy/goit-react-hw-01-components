import { FriendList } from "./FriendsList/FriendsList"
import friends from "../../data/friends"

export const Friends = () => {
    return (
        <section>
            <FriendList friends = {friends} />
        </section>
    )
}