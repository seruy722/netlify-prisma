const routes: Record<string, string> = {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    main: '/',
    profile: '/auth/profile',
};

export const getRouterPath = (path: string): string => routes[path];