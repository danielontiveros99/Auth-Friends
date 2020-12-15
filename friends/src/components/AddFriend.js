import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriend(props) {
    const { name, age, email } = props;
    const [ form, setForm ] = useState(
        {
            name:'',
            age:'',
            email:''
        }
    );

    const onChange = e =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        axiosWithAuth()
        .post('/api/friends', form)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response, 'There was an error in AddFriend fn')
        })
    };

    return(
        <div>
            <h1> Add Friend Component </h1>
            <form onSubmit={addFriend}>
                <label> Name: </label>
                <input 
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                />
                <label> Age: </label>
                <input 
                type='text'
                name='age'
                value={age}
                onChange={onChange}
                />
                <label> Email: </label>
                <input 
                type='text'
                name='email'
                value={email}
                onChange={onChange}
                />
                <button> Click to Add Friend </button>
            </form>
        </div>
    )
}

export default AddFriend;