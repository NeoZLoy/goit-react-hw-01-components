export const ProfileHero = ({userData}) => {
    return (
        <div>
            <img src={userData.avatar} alt="User avatar" />
            <p>{userData.username}</p>
            <p>{userData.tag}</p>
            <p>{userData.location}</p>
        </div>
    )
}
