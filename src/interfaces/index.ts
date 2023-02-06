export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface IAddFriendData {
    name: string;
    email: string;
    phone: string;
}

export interface IRegisterResponse {
    id: string;
    name: string;
    email: string;
    phone: string | undefined;
    isAdm: boolean;
    isActive: boolean;
    created_at: string;
    updated_at: string;
    friends: IFriends[];
}

export interface ILoginResponse {
    token: string;
    user: IResponseUserData;
}

export interface IResponseUserData {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: string;
    friends: IFriends[];
    updated_at: string;
    isAdm: boolean,
    isActive: boolean,
}

export interface IFriends {
    id: string;
    name: string;
    email: string;
    phone: string | undefined;
    userId: string;
    friendId: string;
    created_at: string;
    updated_at: string;
}
export interface IFriendsCard {
    user: IFriends;
    key: string;
}