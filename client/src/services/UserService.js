var authInfo;

export const getAuthInfo = () => {
    return authInfo;
};

export const setAuthInfo = (newAuthInfo) => {
    authInfo = newAuthInfo;
};

export const isAdmin = () => {
    return authInfo && authInfo.principal.admin;
};