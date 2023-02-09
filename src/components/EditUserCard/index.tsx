import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FriendContext } from "../../contexts/FriendsContext"
import { IAddFriendData, IFriends } from "../../interfaces"
import { EditUserCardStyle } from "./styles"
import * as yup from "yup"

function EditUserCard(friendId: Partial<IFriends>) {
    const {
        setfriendIdState,
        editFriend,
        setEditCard
    } = useContext(FriendContext)

    const formSchema = yup.object().shape({
        email: yup.string().email("Email inválido"),
        name: yup.string(),
        phone: yup.string(),
        friendId: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<IAddFriendData>({
            resolver: yupResolver(formSchema)
        })

    return (
        <>
            <EditUserCardStyle>
                <div>
                    <button onClick={() => setEditCard(null)}>X</button>
                    <form onSubmit={handleSubmit(editFriend)}>
                        <input type="text" placeholder="Nome"
                            {...register("name")} />
                        <input type="text" placeholder="Email"
                            {...register("email")} />
                        <input type="text" placeholder="Telefone"
                            {...register("phone")} />
                        <button type="submit" onClick={() => setfriendIdState(friendId.friendId)}>
                            Editar contato
                        </button>
                    </form>
                </div>
            </EditUserCardStyle>
        </>
    )
}

export default EditUserCard