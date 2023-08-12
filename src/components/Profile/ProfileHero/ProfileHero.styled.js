import styled from 'styled-components'

const ProfileDiv = styled.div`
padding: 10px;
background-color: #fff;
`

const ProfileImg = styled.img`
margin-top: 18px;
display: block;
margin-left: auto;
margin-right: auto;
width: 200px;
border-radius: 50%;

`

const ProfileName = styled.p`
margin-top: 18px; 
text-align: center;
font-size: 30px;
font-style: bold;

`

const ProfileText = styled.p`
margin-top: 12px; 
text-align: center;
font-size: 24px;
color: rgba(0, 0, 0, 0.7)
`

export {ProfileDiv, ProfileImg, ProfileName, ProfileText}