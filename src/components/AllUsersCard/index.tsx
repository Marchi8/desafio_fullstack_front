import { useContext, useEffect } from "react"
import { FriendContext } from "../../contexts/FriendsContext"
import { UserContext } from "../../contexts/UserContext"
import { IResponseUserData } from "../../interfaces"
import { AllUsersCardStyle } from "./styles"

function AllUsersCard() {
    const { addFriend } = useContext(FriendContext)
    const { allUsers, user, getUser } = useContext(UserContext)

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            {
                allUsers.map((userall: IResponseUserData) => (
                    userall.name == user.name ?
                        <></>
                        :
                        <AllUsersCardStyle key={userall.id}>
                            <div>
                                <p>{userall.name}</p>
                                <p>{userall.email}</p>
                                <p>{userall.phone}</p>
                                <button onClick={() => addFriend(userall.name, userall.email, userall.phone)}>Adicionar Amigo</button>
                            </div>
                        </AllUsersCardStyle>
                ))
            }
        </>
    )
}

export default AllUsersCard