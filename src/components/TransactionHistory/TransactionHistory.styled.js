import styled from "styled-components"

const TransactionSection = styled.section`
margin-top: 20px;
margin-left: auto;
margin-right: auto;
width: 400px;
border: 1px solid black
`

const Table = styled.table`
width: 100%
`

const TableHeader = styled.th`
padding: 8px;
background-color: #3890B9;
font-size: 24px;
font-weight: 600;
`

const TableRow = styled.tr`
font-size: 18px;
`

const TableBody = styled.tbody`
tr:nth-child(odd){
    background-color: #8C8C8C;
}
`

const TableData = styled.td`
padding: 10px;
`


export {TransactionSection, Table, TableHeader, TableRow, TableData, TableBody}