import { Section } from "./styles"
import LoginForm from "../../components/LoginForm"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Login() {
    const navigate = useNavigate()
    const token = window.localStorage.getItem("@token")

    useEffect(() => {
        if (token) {
            navigate(`/dashboard`, { replace: true })
        }
    }, [])

    return (
        <Section>
            <LoginForm />
        </Section>
    )
}

export default Login