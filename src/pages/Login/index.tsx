import { Section } from "./styles"
import LoginForm from "../../components/LoginForm"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { useContext, useEffect } from "react"

function Login() {
    const {
        getUser,
        retrieveUsers,
        getFriends
    } = useContext(UserContext)

    const navigate = useNavigate()
    const token = window.localStorage.getItem("@token")

    useEffect(() => {
        if (!token) {
            navigate(`/dashboard`, { replace: true })
        } else {
            retrieveUsers()
            getFriends()
            getUser()
        }
    }, [])

    return (
        <Section>
            <LoginForm />
        </Section>
    )
}

export default Login