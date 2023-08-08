import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8080/api/users/createUser", {firstname, lastname, email, phone})
        .then(result =>{ 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-40 bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Firstname</label> */}
                    <input type='text' placeholder='Firstname'  className='form-control' required 
                    onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Lastname</label> */}
                    <input type='text' placeholder='Lastname' className='form-control' required
                    onChange={(e) => setLastname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Email</label> */}
                    <input type='email' placeholder='Email' className='form-control' required
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Phone</label> */}
                    <input type='phone' placeholder='Phone number' className='form-control' required
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>

        </div>
   
    </div>
  )
}

export default CreateUser;