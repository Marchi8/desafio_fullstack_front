import { createContext, ReactNode, useEffect, useState } from "react";
import { ILoginData, ILoginResponse, IRegisterData, IRegisterResponse, IResponseUserData } from "../interfaces";
import { API } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext<IUserAuth>({} as IUserAuth)

export interface IUserAuth {
    user: IResponseUserData;
    allUsers: IResponseUserData[];
    setAllUsers: (data: IResponseUserData[] | []) => void;
    loginFunc: (data: ILoginData) => void;
    registerFunc: (data: IRegisterData) => void;
}

export interface IUserProps {
    children: ReactNode;
}

function UserProvider({ children }: IUserProps) {

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    const [user, setUser] = useState<IResponseUserData>({} as IResponseUserData)
    const [allUsers, setAllUsers] = useState<IResponseUserData[]>([])

    const loginFunc = (data: ILoginData) => {
        console.log(data)
        API.post<ILoginResponse>("/login", data)
            .then(res => {
                console.log(res)
                console.log(res.data.user)
                setUser(res.data.user)
                window.localStorage.setItem("@token", res.data.token)
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
        console.log({ ...data, isAdm: true })
        API.post<IRegisterResponse>("/users/", { ...data, isAdm: true })
            .then(res => {
                console.log(res)
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

    return (
        <UserContext.Provider value={{ setAllUsers, allUsers, user, loginFunc, registerFunc }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider