import { TransactionHeader } from "./TransactionHeader/TransactionHeader"
import { TransactionList } from "./TransactionList/TransactionList"
import transactions from "../../data/transactions"
import { TransactionSection } from "./TransactionHistory.styled"

export const TransactionHistory = () => {
    return (
        <TransactionSection>
            <table>
                <TransactionHeader/>
                <TransactionList transactions = {transactions}/>
               
            </table>
        </TransactionSection>
    )
}