import { Friends } from "./FriendList/Friends"
import { GlobalStyle } from "./GlobalStyle/GlobalStyle"
import { Profile } from "./Profile/Profile"
import { Statistic } from "./Statistics/Statistic"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
import userData from "../data/user"
import uploadData from "../data/data"
import friends from "../data/friends"
import transactions from "../data/transactions"

export const App = () => {
    return (
        <div>
            <Profile userData = {userData}/>
            <Statistic uploadData = {uploadData} title = "Upload Stats"/>
            <Friends friends = {friends}/>
            <TransactionHistory transactions = {transactions}/>
            <GlobalStyle/>
        </div>
        
    )
}