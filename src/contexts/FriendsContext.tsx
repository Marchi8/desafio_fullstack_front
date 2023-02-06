import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IFriends } from "../interfaces";
import { API } from "../services/api";
import { IUserProps, UserContext } from "./UserContext";

export const FriendContext = createContext<IFriendAuth>({} as IFriendAuth)


export interface IFriendAuth {
    friends: IFriends[] | [];
    setFriends: (data: IFriends[] | []) => void;
    addFriend: (email: string, name: string, phone: string) => void;
    removeFriend: (data: string) => void;
}

function FriendProvider({ children }: IUserProps) {
    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()
    const [friends, setFriends] = useState<IFriends[]>([])
    const { setAllUsers, allUsers, user } = useContext(UserContext)

    // useEffect(() => {
    //     getFriends()
    // }, [])

    // const getFriends = () => {
    //     API.get(`/friends`, {
    //         headers: { Authorization: `Bearer ${token}` }
    //     })
    //         .then(res => {
    //             setFriends(res.data.friends)
    //             console.log(friends)
    //         })
    //         .catch(() => console.log("Faça Login!!!"))
    // }

    const removeFriend = (friendId: string) => {
        console.log(friendId)
        API.delete(`/friends/${friendId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setFriends((current) =>
                    current.filter((friend) => friend.friendId !== friendId)
                )
                console.log(friends)
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
                console.log(error)
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
        console.log({ email: email, name: name, phone: phone })
        API.post(`/friends`, { email: email, name: name, phone: phone }, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                setFriends([...friends, res.data])
                // setAllUsers((current) => current.filter((user) => user.name !== name))
                console.log(friends)
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
                console.log(error)
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
        <FriendContext.Provider value={{ addFriend, removeFriend, friends, setFriends }}>
            {children}
        </FriendContext.Provider>
    )

}

export default FriendProvider
