// 认证
export const authenticate = (isAuth) => {
    return {
        type: 'AUTH_IN',
        isAuth
    }
}

export const signout = (isAuth) => {
    return {
        type: 'SIGN_OUT',
        isAuth
    }
}