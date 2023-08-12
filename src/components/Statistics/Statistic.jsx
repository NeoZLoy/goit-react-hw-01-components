import { UploadHead } from "./UploadHead/UploadHead"
import { UploadList } from "./UploadList/UploadList"
import uploadData from "../../data/data"
import { StatisticSection } from "./Statistic.styled"

export const Statistic = () => {
    return (
        <StatisticSection>
            <UploadHead/>
            <UploadList uploadData = {uploadData}/>
        </StatisticSection>
    )
}