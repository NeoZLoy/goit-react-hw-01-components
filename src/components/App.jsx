import { Friends } from "./FriendList/Friends"
import { Profile } from "./Profile/Profile"
import { Statistic } from "./Statistics/Statistic"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

export const App = () => {
    return (
        <div>
            <Profile/>
            <Statistic/>
            <Friends/>
            <TransactionHistory/>
        </div>
        
    )
}