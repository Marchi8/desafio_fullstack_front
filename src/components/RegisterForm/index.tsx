import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { FormRegister } from "./styles"
import * as yup from "yup"
import { IRegisterData } from "../../interfaces"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

function RegisterForm() {
    const { registerFunc } = useContext(UserContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome necessário!"),
        email: yup.string().required("Email necessário!")
            .email("E-mail inválido!"),
        password: yup.string().required("Senha necessária!")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
                "A senha deve ter 8 letras, uma maiúscula, uma minúscula,um número e um caractere especial!"),
        phone: yup.string().required("Telefone obrigatório!")
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<IRegisterData>({
            resolver: yupResolver(formSchema)
        })

    return (
        <FormRegister onSubmit={handleSubmit(registerFunc)}>
            <h3>Registrar Usuário</h3>
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Digite aqui seu nome"
                    {...register("name")} />
                <span>{errors.name?.message}</span>
            </div>
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
            <div>
                <label>Telefone</label>
                <input type="text" placeholder="Digite aqui seu telefone"
                    {...register("phone")} />
                <span>{errors.phone?.message}</span>
            </div>
            <button type="submit">Cadastrar</button>
            <p>Já possui uma conta?</p>
            <Link to="/"><button>Login</button></Link>
        </FormRegister>
    )
}

export default RegisterForm