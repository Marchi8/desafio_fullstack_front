import { createContext, ReactNode, SetStateAction, useState } from "react";
import {
    IFriends,
    ILoginData,
    ILoginResponse,
    IRegisterData,
    IRegisterResponse,
    IResponseUserData
} from "../interfaces";
import { API } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext<IUserAuth>({} as IUserAuth)

export interface IUserAuth {
    user: IResponseUserData;
    allUsers: IResponseUserData[] | [];
    friends: IFriends[] | [];
    setUser: (value: SetStateAction<IResponseUserData>) => void
    setAllUsers: (value: React.SetStateAction<IResponseUserData[]>) => void
    setFriends: (value: React.SetStateAction<IFriends[]>) => void
    loginFunc: (data: ILoginData) => void;
    registerFunc: (data: IRegisterData) => void;
    getUser: () => void;
    getFriends: () => void;
    retrieveUsers: () => void;
}

export interface IUserProps {
    children: ReactNode;
}

function UserProvider({ children }: IUserProps) {
    const userId = window.localStorage.getItem("@id")
    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    const [user, setUser] = useState<IResponseUserData>({} as IResponseUserData)
    const [allUsers, setAllUsers] = useState<IResponseUserData[]>([])
    const [friends, setFriends] = useState<IFriends[]>([])

    const getUser = () => {
        API.get<IResponseUserData>(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }

    const getFriends = () => {
        API.get(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setFriends(res.data.friends)
            })
            .catch(err => console.log(err))
    }

    const retrieveUsers = () => {
        API.get(`/users/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setAllUsers(res.data)
            })
            .catch(err => console.log(err))
    }

    const loginFunc = (data: ILoginData) => {
        API.post<ILoginResponse>("/login", data)
            .then(res => {
                window.localStorage.setItem("@token", res.data.token)
                window.localStorage.setItem("@id", res.data.user.id)
                toast.success("Login realizado com sucesso!", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(`/dashboard`, { replace: true })
            })
            .catch(error => {
                console.log(error)
                toast.error("Email ou senha incorretos", {
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

    const registerFunc = (data: IRegisterData) => {
        API.post<IRegisterResponse>("/users/", { ...data, isAdm: true })
            .then(res => {
                toast.success("Registro realizado com sucesso!", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(`/`, { replace: true })
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
        <UserContext.Provider value={{
            getFriends,
            friends,
            setFriends,
            retrieveUsers,
            getUser,
            setAllUsers,
            allUsers,
            user,
            setUser,
            loginFunc,
            registerFunc
        }}>{children}
        </UserContext.Provider>
    )
}

export default UserProvider