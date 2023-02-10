import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllUsersCard from "../../components/AllUsersCard";
import CreateFriendCard from "../../components/CreateFriendCard";
import FriendsCard from "../../components/FriendsCard";
import { FriendContext } from "../../contexts/FriendsContext";
import { UserContext } from "../../contexts/UserContext";
import { Main } from "./styles";

function Dashboard() {
    const {
        user,
        getUser,
        retrieveUsers,
        getFriends,
    } = useContext(UserContext)
    const { createFriendCard, setCreateFriendCard } = useContext(FriendContext)

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate(`/`, { replace: true })
        } else {
            retrieveUsers()
            getFriends()
            getUser()
        }
    }, [])

    return (
        <Main>
            <header>
                <Link to="/">
                    <button onClick={() => {
                        window.localStorage.clear()
                        return navigate(`/`, { replace: true })
                    }}>
                        Sair
                    </button>
                </Link>
                <h2>DashBoard</h2>
                <div>
                    <h2>Olá, {user.name}</h2>
                </div>
            </header>
            <section>
                <div>
                    <button onClick={() => setCreateFriendCard(true)}>
                        Criar um contato
                    </button>
                    {
                        createFriendCard == true ?
                            <CreateFriendCard />
                            :
                            null
                    }
                    <h3>Seus contatos:</h3>
                    <ul>
                        <FriendsCard />
                    </ul>
                </div>
                <div>
                    <h3>Todos os usuários da palataforma:</h3>
                    <ul>
                        <AllUsersCard />
                    </ul>
                </div>
            </section>
        </Main>
    )
}

export default Dashboard