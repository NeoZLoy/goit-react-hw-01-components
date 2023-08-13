import styled from "styled-components"


const FriendsWrapper = styled.section`
margin-top: 20px;
margin-left: auto;
margin-right: auto;
width: 400px;
background-color: #CCCCCC;
border: 1px solid black
`
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;

`

const ListItem = styled.li`
padding: 8px;
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
`
export {FriendsWrapper, List, ListItem } 