import jwt_decode from "jwt-decode";

export const login = (data) => {
    try {
        if(data.credential) {
            const decoded = jwt_decode(data.credential)
            const user = {
                name: decoded.name,
                email: decoded.email,
                picture: decoded.picture
            }        
            localStorage.setItem('user', JSON.stringify(user))
            return user
        } else return undefined
    } catch (error) {
        alert(error.message)
    }
}

export const logoff = () => {
    localStorage.removeItem('user')
}
