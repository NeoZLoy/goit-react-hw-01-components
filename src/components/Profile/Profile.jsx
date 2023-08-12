import { ProfileHero } from "./ProfileHero"
import userData from "../../data/user"
import { ProfileStats } from "./ProfileStats"

export const Profile = () => {
    return (
        <section>
            <ProfileHero userData = {userData}/>
            <ProfileStats stats = {userData.stats}/>
        </section>
    
    )
}