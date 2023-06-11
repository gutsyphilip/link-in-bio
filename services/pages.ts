import * as payload from '@/data/payload.json';

export const getAllPages = () => {
    return payload?.pages || [];
}

export const getPageDataByUsername = (username: string) => {
    if (!username) throw new Error('Username is required');
    const pageData = payload?.pages?.find((page) => page.userProfile.username === username.toLowerCase());
    return pageData || null;
};

