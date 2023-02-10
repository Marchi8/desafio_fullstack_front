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
        editPhone,
        setEditCard
    } = useContext(FriendContext)

    const formSchema = yup.object().shape({
        phone: yup.string().required("Telefone necessário")
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
                    <form onSubmit={handleSubmit(editPhone)}>
                        <input type="text" placeholder="Telefone"
                            {...register("phone")} />
                        <span>{errors.phone?.message}</span>
                        <button type="submit" onClick={() => setfriendIdState(friendId.friendId)}>
                            Editar telefone
                        </button>
                    </form>
                </div>
            </EditUserCardStyle>
        </>
    )
}

export default EditUserCard