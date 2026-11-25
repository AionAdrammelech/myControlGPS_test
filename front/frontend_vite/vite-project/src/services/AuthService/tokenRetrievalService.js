export const getToken = ()=>{
    return localStorage.getItem('token');
};

export const setUser =(user, token)=>{
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);

}

export const getUser= ()=>{
    return localStorage.getItem('user')
}
export const delUser = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}