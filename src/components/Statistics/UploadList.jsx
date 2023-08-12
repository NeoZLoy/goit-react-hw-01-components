export const UploadList = ({uploadData}) => {
    return (
        <ul>
            {uploadData.map(item => (
                <li key = {item.id}>
                    <span>{item.label}</span>
                    <span>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    )
}