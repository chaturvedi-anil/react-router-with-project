import React from 'react'
import {useParams} from 'react-router-dom';

function User() {
    const {userId} = useParams();
    return (
        <div className='bg-gray-600 text-center text-3xl p-10 text-white'>
            User : {userId}
        </div>
    )
}

export default User;