import { Friends } from "./FriendList/Friends"
import { GlobalStyle } from "./GlobalStyle/GlobalStyle"
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
            <GlobalStyle/>
        </div>
        
    )
}