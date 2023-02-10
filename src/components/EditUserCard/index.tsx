import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FriendContext } from "../../contexts/FriendsContext"
import { IAddFriendData, IFriends } from "../../interfaces"
import { EditUserCardStyle } from "./styles"
import * as yup from "yup"
import { UserContext } from "../../contexts/UserContext"

function EditUserCard(friendId: Partial<IFriends>) {
    const {
        setfriendIdState,
        editPhone,
    } = useContext(FriendContext)
    const { setEditUserCard } = useContext(UserContext)

    const formSchema = yup.object().shape({
        phone: yup.string().required("Insira seu telefone"),
        email: yup.string().email()
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
                    <form onSubmit={handleSubmit(editPhone)}>
                        <input type="text" placeholder="Email"
                            {...register("email")} />
                        <span>{errors.email?.message}</span>
                        <input type="text" placeholder="Telefone"
                            {...register("phone")} />
                        <span>{errors.phone?.message}</span>
                        <button type="submit" onClick={() =>
                            setfriendIdState(friendId.friendId)}>
                            Editar usuário
                        </button>
                    </form>
                </div>
            </EditUserCardStyle>
        </>
    )
}

export default EditUserCard