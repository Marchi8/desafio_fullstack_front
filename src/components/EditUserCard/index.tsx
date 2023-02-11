import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { IAddFriendData } from "../../interfaces"
import { EditUserCardStyle } from "./styles"
import * as yup from "yup"
import { UserContext } from "../../contexts/UserContext"

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
            <EditUserCardStyle>
                <div>
                    <button onClick={() => setEditUserCard(false)}>X</button>
                    <form onSubmit={handleSubmit(editUser)}>
                        testee
                        <input type="text" placeholder="Email"
                            {...register("email")} />
                        <span>{errors.email?.message}</span>
                        <input type="text" placeholder="Telefone"
                            {...register("phone")} />
                        <span>{errors.phone?.message}</span>
                        <button type="submit">
                            Editar usuário
                        </button>
                    </form>
                </div>
            </EditUserCardStyle>
        </>
    )
}

export default EditUserCard