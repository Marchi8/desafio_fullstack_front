import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FriendContext } from "../../contexts/FriendsContext"
import { IFriends } from "../../interfaces"
import { API } from "../../services/api"
import { FriendCardStyle } from "./styles"

function FriendsCard(user: IFriends) {
    const { removeFriend, setFriends, friends } = useContext(FriendContext)
    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    console.log(friends)
    return (
        <FriendCardStyle>
            <div>
                <p>{user.name}</p>
                <button onClick={() => removeFriend(user.friendId)}>remover amigo</button>
            </div>
        </FriendCardStyle>
    )
}

export default FriendsCard