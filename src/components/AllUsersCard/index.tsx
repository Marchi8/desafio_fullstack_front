import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IFriends, IResponseUserData } from "../../interfaces"
import { API } from "../../services/api"
import { AllUsersCardStyle } from "./styles"

function AllUsersCard(data: IResponseUserData) {
    const { removeFriend, setFriends, friends, addFriend } = useContext(FriendContext)
    const { allUsers } = useContext(UserContext)

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    // console.log(data)
    return (
        <AllUsersCardStyle>
            <div>
                <p>{data.name}</p>
                <button onClick={() => addFriend(data.name, data.email, data.phone!)}>Adicionar Amigo</button>
            </div>
        </AllUsersCardStyle>
    )
}

export default AllUsersCard