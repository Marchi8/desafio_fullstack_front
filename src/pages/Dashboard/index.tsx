import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllUsersCard from "../../components/AllUsersCard";
import FriendsCard from "../../components/FriendsCard";
import { FriendContext } from "../../contexts/FriendsContext";
import { UserContext } from "../../contexts/UserContext";
import { IFriends, IResponseUserData } from "../../interfaces";
import { API } from "../../services/api";
import Login from "../Login";
import { Main } from "./styles";

function Dashboard() {
    const { setAllUsers, allUsers, user } = useContext(UserContext)
    const { removeFriend, setFriends, friends } = useContext(FriendContext)

    console.log(user.friends.map((user: IFriends) => (user)))
    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    const getAllUsers = () => {
        API.get(`/users/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setAllUsers(res.data)
                console.log(res.data)
                console.log(allUsers)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    console.log(allUsers)


    const getFriends = () => {
        API.get(`/friends`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setFriends(res.data.friends)
                // getAllUsers()
                console.log("teste")
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getFriends()
    }, [])
    console.log(friends)

    if (token) {
        return (
            <Main>
                <Link to="/">
                    <button onClick={() => window.localStorage.clear()}>
                        Sair
                    </button>
                </Link>
                <h3>DashBoard</h3>
                <div>
                    <p>Olá, {user.name}</p>
                </div>
                <section>
                    <div>
                        <ul>
                            <h3>Friends List</h3>
                            {friends.map((user: IFriends) => (
                                <FriendsCard key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    userId={user.userId}
                                    friendId={user.friendId}
                                    created_at={user.created_at}
                                    updated_at={user.updated_at}
                                />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3>All Users List</h3>
                        <ul>
                            {allUsers.map((userall: IResponseUserData) => (
                                userall.name == user.name ||
                                    user.friends.find((friend) => (friend.name == userall.name)) ?
                                    <></>
                                    :
                                    <AllUsersCard key={userall.id}
                                        id={userall.id}
                                        name={userall.name}
                                        email={userall.email}
                                        phone={userall.phone}
                                        isAdm={userall.isAdm}
                                        isActive={userall.isActive}
                                        created_at={userall.created_at}
                                        updated_at={userall.updated_at}
                                        friends={userall.friends} />

                            ))}
                        </ul>
                    </div>
                </section>
            </Main>
        )
    }
    else {
        return (<Login />)
    }
}

export default Dashboard