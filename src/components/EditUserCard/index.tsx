import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { IAddFriendData } from "../../interfaces"
import { EditUserCardStyle } from "./styles"
import * as yup from "yup"
import { UserContext } from "../../contexts/UserContext"
import { Background } from "../CreateFriendCard/styles"

function EditUserCard() {
    const { editUser, setEditUserCard } = useContext(UserContext)

    const formSchema = yup.object().shape({
        phone: yup.string().required("Insira seu telefone"),
        email: yup.string().email().required("Confirme seu email")
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<IAddFriendData>({
            resolver: yupResolver(formSchema)
        })

    return (
        <>
            <Background>
                <EditUserCardStyle>
                    <div>
                        <button onClick={() => setEditUserCard(false)}>X</button>
                        <form onSubmit={handleSubmit(editUser)}>
                            <h3>Edite seu usuário</h3>
                            <div>
                                <label>Email</label>
                                <input type="text"
                                    placeholder="Digite aqui seu email"
                                    {...register("email")} />
                                <span>{errors.email?.message}</span>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text"
                                    placeholder="Digite aqui seu telefone"
                                    {...register("phone")} />
                                <span>{errors.phone?.message}</span>
                            </div>
                            <button type="submit">
                                Editar usuário
                            </button>
                        </form>
                    </div>
                </EditUserCardStyle>
            </Background>
        </>
    )
}

export default EditUserCard