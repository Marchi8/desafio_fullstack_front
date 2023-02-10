import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState
} from "react";
import { toast } from "react-toastify";
import { IAddFriendData } from "../interfaces";
import { API } from "../services/api";
import { IUserProps, UserContext } from "./UserContext";

export const FriendContext = createContext<IFriendAuth>({} as IFriendAuth)

export interface IFriendAuth {
    editCard: string | null;
    createFriendCard: boolean;
    friendIdState: string | undefined;
    setEditCard: Dispatch<SetStateAction<string | null>>;
    setCreateFriendCard: Dispatch<SetStateAction<boolean>>;
    setfriendIdState: Dispatch<SetStateAction<string | undefined>>;
    addFriend: (email: string, name: string, phone: string) => void;
    createFriend: (data: IAddFriendData) => void;
    removeFriend: (data: string) => void;
    editPhone: (data: any) => void;
}

function FriendProvider({ children }: IUserProps) {
    const token = window.localStorage.getItem("@token")
    const {
        getFriends,
        friends,
        setFriends,
        retrieveUsers
    } = useContext(UserContext)
    const [editCard, setEditCard] = useState<string | null>(null)
    const [createFriendCard, setCreateFriendCard] = useState<boolean>(false)
    const [friendIdState, setfriendIdState] = useState<string | undefined>()

    const removeFriend = (friendId: string) => {
        API.delete(`/friends/${friendId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setFriends((current) => current.filter((friend) =>
                    friend.friendId !== friendId))
                retrieveUsers()
                toast.success("Usuário removido da lista de amigos", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                toast.error("Ops! Algo deu errado", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    const addFriend = (name: string, email: string, phone: string) => {
        API.post(`/friends`, { email: email, name: name, phone: phone }, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setFriends([...friends, res.data])
                toast.success("Usuário adicionado à lista de amigos", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                toast.error("Usuário já adicionado", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    const createFriend = (data: IAddFriendData) => {
        API.post(`/friends`, data, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setFriends([...friends, res.data])
                setCreateFriendCard(false)
                toast.success("Usuário adicionado à lista de amigos", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                toast.error("Usuário já adicionado", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    const editPhone = (data: any) => {
        if (data == "") {
            return toast.error("Dados vazios", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }

        API.patch(`/friends/${friendIdState}`, data, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                getFriends()
                setEditCard(null)
                toast.success("Usuário Atualizado", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                console.log(error.response.data.message)
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    return (
        <FriendContext.Provider value={{
            createFriend,
            setCreateFriendCard,
            createFriendCard,
            friendIdState,
            setfriendIdState,
            editCard,
            setEditCard,
            editPhone,
            addFriend,
            removeFriend
        }}>{children}
        </FriendContext.Provider>
    )
}

export default FriendProvider
