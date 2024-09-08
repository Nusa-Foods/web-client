export interface RecipeType {
    _id: string;
    title: string;
    description: string;
    imgUrl: string;
    bannerUrl: string;
    slug: string;
    likes: string[];
    comments: string[];
    createdAt: Date;
    updatedAt: Date;
    authorId: AuthorId;
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
