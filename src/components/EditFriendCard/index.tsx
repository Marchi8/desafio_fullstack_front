import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FriendContext } from "../../contexts/FriendsContext"
import { IAddFriendData, IFriends } from "../../interfaces"
import { EditFriendCardStyle } from "./styles"
import * as yup from "yup"

function EditFriendCard(friendId: Partial<IFriends>) {
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
            <EditFriendCardStyle>
                <div>
                    <button onClick={() => setEditCard(null)}>X</button>
                    <form onSubmit={handleSubmit(editPhone)}>
                        <label>Editar telefone:</label>
                        <input type="text" placeholder="Telefone"
                            {...register("phone")} />
                        <span>{errors.phone?.message}</span>
                        <button type="submit" onClick={() =>
                            setfriendIdState(friendId.friendId)}>
                            Confirmar
                        </button>
                    </form>
                </div>
            </EditFriendCardStyle>
        </>
    )
}

export default EditFriendCard