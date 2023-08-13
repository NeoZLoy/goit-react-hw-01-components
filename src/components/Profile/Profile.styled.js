import styled from "styled-components"

const ProfileSection = styled.section`
margin-top: 20px;
margin-left: auto;
margin-right: auto;
width: 400px;
background-color: #CCCCCC;
border: 1px solid black`

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

export {ProfileSection,ProfileDiv, ProfileImg, ProfileName, ProfileText, StatsList, StatsItem, StatsTitle, StatsQuantity}
