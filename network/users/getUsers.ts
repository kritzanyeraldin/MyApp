import {axiosInstance} from '..'

export const getUsers = async () => {
    const response = await axiosInstance.get('/api/users')
    console.log(response)
}

getUsers()