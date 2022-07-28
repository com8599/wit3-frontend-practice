import {useQuery} from 'react-query';
import {axiosUsers} from '../api/users';

const Users = () => {
    const usersQuery = useQuery('users',axiosUsers);

    if(usersQuery.isLoading || usersQuery.isIdle){
        return <div>loading...</div>;
    }

    if(usersQuery.isError){
        return <div>Error...</div>;
    }

    return (
        <div>
            {usersQuery.data.map((user)=>{
                return <div key={user.id}>{user.username}</div>
            })}
        </div>
    )
}

export default Users;