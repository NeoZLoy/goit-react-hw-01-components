import styled from "styled-components"

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

export {TableRow, TableData, TableBody}