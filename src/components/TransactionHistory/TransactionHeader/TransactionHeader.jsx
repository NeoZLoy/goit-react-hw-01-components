import { TableHeader} from "./TransactionHeader.styled"

export const TransactionHeader = () => {
    return (
        <thead>
             <tr>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </tr>
        </thead>
           
    )
}