import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FriendContext } from "../../contexts/FriendsContext"
import { IAddFriendData } from "../../interfaces"
import { Background, CreateFriendCardStyle } from "./styles"
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
            <Background>
                <CreateFriendCardStyle>
                    <div>
                        <button onClick={
                            () => setCreateFriendCard(false)}>X</button>
                        <form onSubmit={handleSubmit(createFriend)}>
                            <div>
                                <label>Email</label>
                                <input type="text"
                                    placeholder="Digite aqui o email"
                                    {...register("email")} />
                                <span>{errors.email?.message}</span>
                            </div>
                            <div>
                                <label>Nome</label>
                                <input type="text"
                                    placeholder="Digite aqui o nome"
                                    {...register("name")} />
                                <span>{errors.name?.message}</span>
                            </div>
                            <div>
                                <label>Telefone</label>
                                <input type="text"
                                    placeholder="Digite aqui o telefone"
                                    {...register("phone")} />
                                <span>{errors.phone?.message}</span>
                            </div>
                            <button type="submit">
                                Criar contato
                            </button>
                        </form>
                    </div>
                </CreateFriendCardStyle>
            </Background>
        </>
    )
}

export default CreateFriendCard