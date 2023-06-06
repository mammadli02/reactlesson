import { BASE_URL } from "./BASE_URL";
import axios from "axios";

//register
export const signUp = (payload)=>{
    axios.post(`${BASE_URL}/api/register`,payload)
}

//login
export const signIn = async(payload)=>{
    const response =  await axios.post(`${BASE_URL}/api/login`,payload);
    return response.data;
}

//users
export const getUsers = async(token)=>{
    let users;
    await axios.get(`${BASE_URL}/api/users`,{
        headers: {
            'x-access-token': token
        }
    }).then((res)=>{
        users = res.data;
    })
    return users;
}