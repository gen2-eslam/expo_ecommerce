interface UserData {
    _id: string;
    name: string;
    slug: string;
    email: string;
    phone: string;
    profileImage: string;
    role: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AuthResponse {
    data: UserData;
    token: string;
}


