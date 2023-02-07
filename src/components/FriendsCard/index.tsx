import { useContext } from "react"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IFriends } from "../../interfaces"
import { FriendCardStyle } from "./styles"

function FriendsCard() {
    const { removeFriend } = useContext(FriendContext)
    const { friends, user } = useContext(UserContext)

    return (
        <>
            {friends.map((data: IFriends) => (
                data.name == user.name ?
                    <></>
                    :
                    <FriendCardStyle key={data.id}>
                        <div>
                            <p>{data.name}</p>
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <button onClick={() => removeFriend(data.friendId)}>
                                remover amigo
                            </button>
                        </div>
                    </FriendCardStyle>
            ))}
        </>
    )
}

export default FriendsCard