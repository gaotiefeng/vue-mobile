import Cookie from 'js-cookie'


const TokenKey = 'Auth-Token';


export function setToken(token)
{
    return Cookie.set(TokenKey,token)
}


export function getToken(){
    return Cookie.get(TokenKey)
}