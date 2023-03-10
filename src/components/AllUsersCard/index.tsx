import { useContext } from "react"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IResponseUserData } from "../../interfaces"
import { AllUsersCardStyle } from "./styles"

function AllUsersCard() {
    const { addFriend } = useContext(FriendContext)
    const { allUsers, user } = useContext(UserContext)

    return (
        <>
            {allUsers.map((userall: IResponseUserData) => (
                userall.email == user.email ?
                    null
                    :
                    <AllUsersCardStyle key={userall.id}>
                        <div>
                            <p>{userall.name}</p>
                            <p>{userall.email}</p>
                            <p>{userall.phone}</p>
                            <button onClick={() =>
                                addFriend(
                                    userall.name,
                                    userall.email,
                                    userall.phone
                                )}>Adicionar usuário
                            </button>
                        </div>
                    </AllUsersCardStyle>
            ))}
        </>
    )
}

export default AllUsersCard