import { useContext } from "react"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IFriends } from "../../interfaces"
import { FriendCardStyle } from "./styles"
import { AiOutlineEdit } from "react-icons/ai"

function FriendsCard() {
    const { editCard, setEditCard, removeFriend } = useContext(FriendContext)
    const { friends, user } = useContext(UserContext)
    console.log(editCard)
    return (
        <>
            {friends.map((data: IFriends) => (
                data.email == user.email ?
                    null
                    :
                    <FriendCardStyle key={data.friendId}>
                        <div>
                            {/* <button onclick set editUserCard on/> */}
                            {/* <button onClick={() => setEditCard(false)}>X</button> */}
                            <button id="open-edit" onClick={() => { setEditCard(true) }}> <AiOutlineEdit /></button>
                            <p>{data.name}</p>
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <button onClick={() => removeFriend(data.friendId)}>
                                Remover contato
                            </button>
                        </div>
                    </FriendCardStyle>
            ))
            }
        </>
    )
}

export default FriendsCard