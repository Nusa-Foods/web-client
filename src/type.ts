export interface RecipeType {
    _id: string;
    title: string;
    description: string;
    imgUrl: string;
    bannerUrl: string;
    slug: string;
    likes: Like[];
    comments: Comment[];
    createdAt: Date;
    updatedAt: Date;
    authorId: AuthorId;
    guide: string;
}

export interface Like {
    userEmail: string;
    createdAt: string;
}

export interface Comment {
    _id: string;
    username: string;
    text: string;
    createdAt: Date;
}

export interface Id {
    $oid: string;
}

export interface AuthorId {
    $oid: string;
}

export interface GoogleLoginResponseType {
    accessToken: string;
}

export interface CredentialResponseType {
    credential: string;
}

// User
export interface UserType {
    imgUrl?: string;
    _id?: string;
    username?: string;
    email?: string;
    bio?: string;
    createdAt?: string;
    updatedAt?: string;
    recipe?: any[];
    event?: string[];
    user_recipes?: RecipeType[];
    welcomeMessage?: string;
    role?: string;
}

//event
export interface EventType {
    _id: string;
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    attendance: registerEventUser[];
    quota: number;
}

export interface registerEventUser {
    name: string;
    email: string;
    registeredAt: string;
}

declare global {
    interface Window {
        cloudinary: any;
    }
}
