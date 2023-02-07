import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IFriends } from "../../interfaces"
import { API } from "../../services/api"
import { FriendCardStyle } from "./styles"

function FriendsCard() {
    const { removeFriend } = useContext(FriendContext)
    const { setFriends, friends } = useContext(UserContext)
    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()
    console.log(friends)
    return (
        <>
            {friends.map((user: IFriends) => (
                <FriendCardStyle>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <button onClick={() => removeFriend(user.friendId)}>remover amigo</button>
                    </div>
                </FriendCardStyle>
            ))}
        </>
    )

}

export default FriendsCard