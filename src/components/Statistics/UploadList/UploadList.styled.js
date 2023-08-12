import styled  from "styled-components";

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

export { List, ListItem }