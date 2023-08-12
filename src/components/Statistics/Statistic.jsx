import { UploadHead } from "./UploadHead"
import { UploadList } from "./UploadList"
import uploadData from "../../data/data"

export const Statistic = () => {
    return (
        <section>
            <UploadHead/>
            <UploadList uploadData = {uploadData}/>
        </section>
    )
}