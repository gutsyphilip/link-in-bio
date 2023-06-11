export interface RootObject {
    pages: PageParams[];
}

export interface PageParams {
    userId: string;
    userProfile: UserProfileParams;
    links: LinkParams[];
}

export interface LinkParams {
    title: string;
    url: string;
}

export interface UserProfileParams {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    socialLinks: SocialLinksParams;
}

export interface SocialLinksParams {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
    behance?: string;
    instagram?: string;
    medium?: string;
    facebook?: string;
    youtube?: string;
    flickr?: string;
}