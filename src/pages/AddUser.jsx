import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddUser = () => {
    const [fin,setFin]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')

    const UserHandler = (e) =>{
        e.preventDefault()
        const addUser= async () =>{
            const newUser = {
                id:fin,
                name:name,
                phone:phone
            }
            
            await axios.post('http://localhost:3030/posts',newUser);
            
        }
        addUser();
    }

    const FinHandler = (e) =>{
        setFin(e.target.value)
    }

    const NameHandler = (e) =>{
        setName(e.target.value)
    }

    const PhoneHandler = (e) =>{
        setPhone(e.target.value)
    }
  return (
    <div className='col-lg-4 col-6 mx-auto mt-5'>
      <form onSubmit={UserHandler}>
        <input onChange={FinHandler} className='form-control' type="text" placeholder='FIN' />
        <input onChange={NameHandler} className='form-control my-4' type="text" placeholder='Fullname' />
        <input onChange={PhoneHandler} className='form-control' type="text" placeholder='Phone' />
        <button type='submit' className='btn-lg btn fw-bold mt-3 w-100 btn-success'>ADD USER</button>
      </form>
    </div>
  )
}

export default AddUser