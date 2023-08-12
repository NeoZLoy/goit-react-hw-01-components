import styled from "styled-components"

const StatsList = styled.ul`
display: flex;
justify-content: center;
list-style: none;



`

const StatsItem = styled.li`
width: 150px;
padding: 18px;
border: 1px solid rgba(0,0,0,0.5);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;

`


const StatsTitle = styled.span`
font-size: 24px;
`

const StatsQuantity = styled.span`
font-size: 24px;
font-weight: 600;
`
export {StatsList, StatsItem, StatsTitle, StatsQuantity}