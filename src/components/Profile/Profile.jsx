import {ProfileSection, ProfileDiv, ProfileImg, ProfileName, ProfileText, StatsList, StatsItem, StatsTitle, StatsQuantity} from './Profile.styled'

export const Profile = ({userData}) => {
    return (
        <ProfileSection>
            <ProfileDiv>
                <ProfileImg src={userData.avatar} alt="User avatar" />
                <ProfileName>{userData.username}</ProfileName>
                <ProfileText>@{userData.tag}</ProfileText>
                <ProfileText>{userData.location}</ProfileText>
            </ProfileDiv>
            <StatsList>
                <StatsItem>
                    <StatsTitle>Followers</StatsTitle>
                    <StatsQuantity>{userData.stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsTitle>Views</StatsTitle>
                    <StatsQuantity>{userData.stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsTitle>Likes</StatsTitle>
                    <StatsQuantity>{userData.stats.likes}</StatsQuantity>
                </StatsItem>
        </StatsList>
        </ProfileSection>
    
    )
}