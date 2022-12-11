import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useState } from 'react';
import axios from 'axios';

const HomePage = (props) => {
    const [value,setValue] = useState('')

    const filteredUsers = props.userList.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))

    const InputHandler = (e) =>{
        setValue(e.target.value)
    }

    const DeleteHandler = async (id) =>{
        await axios.delete(`http://localhost:3030/posts/${id}`)
    }
    
    
  return (
    <div className='container mt-2'> 
      <input onChange={InputHandler} type="text" placeholder='Search...' className='form-control w-50 mx-auto mt-3 my-3'/>

        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">FullName</th>
                <th scope="col">Phone</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredUsers.map( user => {
                        return(
                            <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>
                                <button onClick={DeleteHandler(user.id)} className='btn btn-danger'><RiDeleteBin2Fill /> Delete</button>
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default HomePage