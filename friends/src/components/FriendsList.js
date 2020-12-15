import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

function FriendsList() {
    const [friends, setFriends] = useState([])

    const getFriends = e => {
        e.preventDefault();
        axiosWithAuth()
        .get(`/api/friends`)
        .then(res => setFriends(res.data))
        .catch(err => err.response, 'Error in getFriends in FriendsList')
    }

    return(
        <div>
            <h2> Friend List </h2>
            <button onClick={getFriends}> Click to View Friends</button>
            <AddFriend />

            {friends.map(friend => (
                <div key={friend.id}>
                    <h2> Name: {friend.name} </h2>
                    <p> Age: {friend.age} </p>  
                    <p> Email: {friend.email} </p>   
                </div>
            ))}
        </div>
    )
}
export default FriendsList;