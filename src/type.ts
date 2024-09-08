export interface RecipeType {
    _id: string;
    title: string;
    description: string;
    imgUrl: string;
    bannerUrl: string;
    slug: string;
    likes: Like[];
    comments: string[];
    createdAt: Date;
    updatedAt: Date;
    authorId: AuthorId;
}

export interface Like {
    userEmail: string;
    createdAt: string;
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
    _id?: string;
    username?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    recipe?: string[];
    event?: string[];
    user_recipes?: RecipeType[];
}
