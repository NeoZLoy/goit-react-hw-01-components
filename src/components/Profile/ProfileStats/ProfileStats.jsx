import { StatsList, StatsItem, StatsTitle, StatsQuantity } from "./ProfileStats.styled"

export const ProfileStats = ({stats}) => {
    return (
        <StatsList>
            <StatsItem>
                <StatsTitle>Followers</StatsTitle>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsTitle>Views</StatsTitle>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsTitle>Likes</StatsTitle>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
        </StatsList>
    )
}