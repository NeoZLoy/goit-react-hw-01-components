import { TableRow, TableData,  TableBody} from "./TransactionList.styled"

export const TransactionList = ({transactions}) => {
    return (
        <TableBody>
            {transactions.map(transaction => (
                <TableRow key = {transaction.id}>
                    <TableData>{transaction.type}</TableData>
                    <TableData>{transaction.amount}</TableData>
                    <TableData>{transaction.currency}</TableData>
                </TableRow>
            ))}
        </TableBody>
    )
}