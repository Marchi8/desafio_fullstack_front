import { useContext } from "react"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IFriends } from "../../interfaces"
import { FriendCardStyle } from "./styles"
import { AiOutlineEdit } from "react-icons/ai"
import EditUserCard from "../EditUserCard"

function FriendsCard() {
    const { editCard, setEditCard, removeFriend } = useContext(FriendContext)
    const { friends, user } = useContext(UserContext)

    return (
        <>
            {
                friends.map((data: IFriends) => (
                    data.email == user.email ||
                        editCard == data.friendId ?
                        <EditUserCard key={data.friendId}
                            friendId={data.friendId} />
                        :
                        <FriendCardStyle key={data.friendId}>
                            <div>
                                <button id="open-edit"
                                    onClick={() => setEditCard(data.friendId)}>
                                    <AiOutlineEdit />
                                </button>
                                <p>{data.name}</p>
                                <p>{data.email}</p>
                                <p>{data.phone}</p>
                                <button onClick={() =>
                                    removeFriend(data.friendId)}>
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