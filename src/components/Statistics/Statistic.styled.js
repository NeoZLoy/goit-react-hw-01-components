import styled from "styled-components"

const StatisticSection = styled.section`
margin-top: 20px;
margin-left: auto;
margin-right: auto;
width: 400px;
border: 1px solid black
`

const StatsTitle = styled.h2`
text-align: center;
font-size: 36px;
font-weight: 600;
padding: 18px;
background-color: #55C835;
`

const List = styled.ul`
display: flex;
padding: 8px;
justify-content: space-between;
list-style: none;
background-color: #824FF4;
`
const ListItem = styled.li`
display: flex;
flex-direction: column;
gap: 12px;
padding: 8px;
font-size: 18px;



:nth-child(even){
    font-size: 24px;
    font-weight: 600;
}
`

export {StatisticSection, StatsTitle, List, ListItem}