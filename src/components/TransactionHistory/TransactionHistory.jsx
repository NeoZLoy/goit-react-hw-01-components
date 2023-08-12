import { TransactionHeader } from "./TransactionHeader/TransactionHeader"
import { TransactionList } from "./TransactionList/TransactionList"
import transactions from "../../data/transactions"
import { TransactionSection, Table } from "./TransactionHistory.styled"

export const TransactionHistory = () => {
    return (
        <TransactionSection>
            <Table>
                <TransactionHeader/>
                <TransactionList transactions = {transactions}/>
               
            </Table>
        </TransactionSection>
    )
}