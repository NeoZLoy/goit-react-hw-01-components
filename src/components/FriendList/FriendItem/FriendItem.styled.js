import styled from "styled-components"

const FriendImg = styled.img`
width: 80px;
border-radius: 50%;
margin-left: 20px;
`

const FriendStatus = styled.span`
width: 15px;
height: 15px;
background-color: ${props => (props.$isOnline === true ? 'green' : 'red')};
border-radius: 50%;
`

const FriendName = styled.p`
margin-left: 30px;
font-size: 24px;
`

export{ FriendImg, FriendStatus, FriendName}