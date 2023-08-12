import { TransactionHeader } from "./TransactionHeader"
import { TransactionList } from "./TransactionList"
import transactions from "../../data/transactions"

export const TransactionHistory = () => {
    return (
        <section>
            <table>
                <TransactionHeader/>
                <TransactionList transactions = {transactions}/>
               
            </table>
        </section>
    )
}