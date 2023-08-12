import { ProfileDiv, ProfileImg, ProfileName, ProfileText } from "./ProfileHero.styled"
export const ProfileHero = ({userData}) => {
    return (
        <ProfileDiv>
            <ProfileImg src={userData.avatar} alt="User avatar" />
            <ProfileName>{userData.username}</ProfileName>
            <ProfileText>{userData.tag}</ProfileText>
            <ProfileText>{userData.location}</ProfileText>
        </ProfileDiv>
    )
}
