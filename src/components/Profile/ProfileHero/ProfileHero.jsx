import { ProfileDiv, ProfileImg } from "./ProfileHero.styled"
export const ProfileHero = ({userData}) => {
    return (
        <ProfileDiv>
            <ProfileImg src={userData.avatar} alt="User avatar" />
            <p>{userData.username}</p>
            <p>{userData.tag}</p>
            <p>{userData.location}</p>
        </ProfileDiv>
    )
}
