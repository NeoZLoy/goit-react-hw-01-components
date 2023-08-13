import {FriendImg, FriendStatus, FriendName} from "./FriendItem.styled"

export const FriendItem = ({friend}) => {
    return( 
    <>
        <FriendStatus $isOnline = {friend.isOnline}> </FriendStatus>
        <FriendImg src={friend.avatar} alt="Friend Avatar" />
        <FriendName>{friend.name}</FriendName>
    </>)
   

}
