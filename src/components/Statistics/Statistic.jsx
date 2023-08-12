import { UploadHead } from "./UploadHead/UploadHead"
import { UploadList } from "./UploadList/UploadList"
import uploadData from "../../data/data"

export const Statistic = () => {
    return (
        <section>
            <UploadHead/>
            <UploadList uploadData = {uploadData}/>
        </section>
    )
}