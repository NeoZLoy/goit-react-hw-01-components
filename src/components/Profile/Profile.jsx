import { ProfileHero } from "./ProfileHero/ProfileHero"
import userData from "../../data/user"
import { ProfileStats } from "./ProfileStats/ProfileStats"
import {ProfileSection} from './Profile.styled'

export const Profile = () => {
    return (
        <ProfileSection>
            <ProfileHero userData = {userData}/>
            <ProfileStats stats = {userData.stats}/>
        </ProfileSection>
    
    )
}