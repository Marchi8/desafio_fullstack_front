import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllUsersCard from "../../components/AllUsersCard";
import FriendsCard from "../../components/FriendsCard";
import { UserContext } from "../../contexts/UserContext";
import { Main } from "./styles";

function Dashboard() {
    const { user, getUser, friends, retrieveUsers, getFriends } = useContext(UserContext)

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate(`/`, { replace: true })
        } else {
            retrieveUsers()
            getUser()
            getFriends()
        }
    }, [])

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