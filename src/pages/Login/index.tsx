import { Section } from "./styles"
import LoginForm from "../../components/LoginForm"
import { useNavigate } from "react-router-dom"
import Dashboard from "../Dashboard"

function Login() {
    const navigate = useNavigate()
    const token = window.localStorage.getItem("@token")
    if (token) {
        navigate("/dashboard", { replace: true })
        return (<Dashboard />)
    } else {
        return (
            <Section>
                <LoginForm />
            </Section>
        )
    }
}

export default Login