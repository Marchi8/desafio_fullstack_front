import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { FormLogin } from "./styles"
import * as yup from "yup"
import { ILoginData } from "../../interfaces"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

function LoginForm() {
    const { loginFunc } = useContext(UserContext)

    const formSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Email necessário"),
        password: yup.string().required("Senha necessária")
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<ILoginData>({
            resolver: yupResolver(formSchema)
        })

    return (
        <FormLogin onSubmit={handleSubmit(loginFunc)}>
            <h3>Login</h3>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Digite aqui seu email"
                    {...register("email")} />
                <span>{errors.email?.message}</span>
            </div>
            <div>
                <label>Senha</label>
                <input type="password" placeholder="Digite aqui sua senha"
                    {...register("password")} />
                <span>{errors.password?.message}</span>
            </div>
            <button type="submit">Entrar</button>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register"><button>Cadastre-se</button></Link>
        </FormLogin>
    )
}

export default LoginForm