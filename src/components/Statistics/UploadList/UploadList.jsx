import { List, ListItem } from "./UploadList.styled"

export const UploadList = ({uploadData}) => {
    return (
        <List>
            {uploadData.map(item => (
                <ListItem key = {item.id}>
                    <span>{item.label}</span>
                    <span>{item.percentage}%</span>
                </ListItem>
            ))}
        </List>
    )
}