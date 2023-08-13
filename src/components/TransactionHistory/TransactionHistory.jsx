import { TransactionSection, Table, TableHeader, TableRow, TableData, TableBody} from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
    return (
        <TransactionSection>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Type</TableHeader>
                        <TableHeader>Amount</TableHeader>
                        <TableHeader>Currency</TableHeader>
                    </tr>
                </thead>
                <TableBody>
                    {transactions.map(transaction => (
                        <TableRow key = {transaction.id}>
                            <TableData>{transaction.type}</TableData>
                            <TableData>{transaction.amount}</TableData>
                            <TableData>{transaction.currency}</TableData>
                        </TableRow>
                    ))}
                </TableBody>
               
            </Table>
        </TransactionSection>
    )
}