import React from 'react'
import List from './List'
import './index.css'

const Friend = (props) => {
    {console.log('$$$$',props)}

     return (
     <div className = 'Friend'> 
    <h2>{props.friend.id}</h2>
        <h1>{console.log(props.friend.name)} Name: { props.friend.name}</h1>
        <h2>Age:{ props.friend.age}</h2>
        <h2>Email:{ props.friend.email} </h2>
        <button> Update</button>
        <button onClick= {(e) => props.remove(e,props.friend.id)}>Delete</button>
    </div>
)
}

export default Friend