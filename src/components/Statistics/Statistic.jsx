import { StatisticSection, StatsTitle, List, ListItem } from "./Statistic.styled"

export const Statistic = ({uploadData, title}) => {
    return (
        <StatisticSection>
            {title.length > 0 &&(
                <StatsTitle title = {title}>{title}</StatsTitle>
            )}
            <List>
            {uploadData.map(item => (
                <ListItem key = {item.id}>
                    <span>{item.label}</span>
                    <span>{item.percentage}%</span>
                </ListItem>
            ))}
        </List>
        </StatisticSection>
    )
}