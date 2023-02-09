import { useContext } from "react"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IFriends } from "../../interfaces"
import { EditUserCardStyle } from "./styles"

function editUserCard() {
    const { editCard, setEditCard, removeFriend } = useContext(FriendContext)
    const { friends, user } = useContext(UserContext)

    return (
        <>
            {friends.map((data: IFriends) => (
                data.email == user.email ?
                    null
                    :
                    <EditUserCardStyle key={data.friendId}>
                        <div>
                            {/* <button onclick set editUserCard off/> */}
                            <button onClick={() => {
                                // setEditCard(false)
                                // console.log(editCard)
                            }}>X</button>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <button onClick={() => removeFriend(data.friendId)}>
                                Editar contato
                            </button>
                        </div>
                    </EditUserCardStyle>
            ))}
        </>
    )
}

export default editUserCard