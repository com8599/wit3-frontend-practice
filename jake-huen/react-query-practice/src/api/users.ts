import axios from 'axios';
import { ComponentFactory } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
    phone:string;
    website:string;
    company:Company;
}
interface Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo;
}
interface Geo{
    lat:string;
    lng:string;
}

interface Company{
    name:string;
    catchPhrase:string;
    bs:string;
}

const axiosUsers = async () =>{
    const response = await axios.get(`${BASE_URL}/users`);
    const data:User[] = response.data;
    return data;
}

export {axiosUsers};