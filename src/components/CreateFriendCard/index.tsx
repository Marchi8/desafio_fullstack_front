import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FriendContext } from "../../contexts/FriendsContext"
import { IAddFriendData } from "../../interfaces"
import { CreateFriendCardStyle } from "./styles"
import * as yup from "yup"

function CreateFriendCard() {
    const {
        createFriend
    } = useContext(FriendContext)
    const { setCreateFriendCard } = useContext(FriendContext)

    const formSchema = yup.object().shape({
        phone: yup.string().required("Telefone necessário"),
        email: yup.string().email().required("Email necessário"),
        name: yup.string().required("Nome necessário")
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<IAddFriendData>({
            resolver: yupResolver(formSchema)
        })

    return (
        <>
            <CreateFriendCardStyle>
                <div>
                    <button onClick={() => setCreateFriendCard(false)}>X</button>
                    <form onSubmit={handleSubmit(createFriend)}>
                        <input type="text" placeholder="Email"
                            {...register("email")} />
                        <span>{errors.email?.message}</span>
                        <input type="text" placeholder="Nome"
                            {...register("name")} />
                        <span>{errors.name?.message}</span>
                        <input type="text" placeholder="Telefone"
                            {...register("phone")} />
                        <span>{errors.phone?.message}</span>
                        <button type="submit">
                            Criar contato
                        </button>
                    </form>
                </div>
            </CreateFriendCardStyle>
        </>
    )
}

export default CreateFriendCard