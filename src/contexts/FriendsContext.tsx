import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { API } from "../services/api";
import { IUserProps, UserContext } from "./UserContext";

export const FriendContext = createContext<IFriendAuth>({} as IFriendAuth)

export interface IFriendAuth {
    addFriend: (email: string, name: string, phone: string) => void;
    removeFriend: (data: string) => void;
}

function FriendProvider({ children }: IUserProps) {
    const token = window.localStorage.getItem("@token")
    const { friends, setFriends, retrieveUsers } = useContext(UserContext)

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

    return (
        <FriendContext.Provider value={{ addFriend, removeFriend }}>
            {children}
        </FriendContext.Provider>
    )
}

export default FriendProvider
