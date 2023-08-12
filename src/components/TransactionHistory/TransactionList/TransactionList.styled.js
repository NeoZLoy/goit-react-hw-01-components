import styled from "styled-components"

const TableRow = styled.tr`
font-size: 18px;


`

const TableBody = styled.tbody`

:nth-child(odd){
    background-color: tomato;
}

:nth-child(even){
    background-color: #fff;
}

`

const TableData = styled.td`
padding: 10px;

`

export {TableRow, TableData, TableBody}