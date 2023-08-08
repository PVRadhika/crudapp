import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdateUser() {
    const {id} = useParams()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/users/getUser/'+ id)
        .then(result => {console.log(result)
            setFirstname(result.data.firstname)
            setLastname(result.data.lastname)
            setEmail(result.data.email)
            setPhone(result.data.phone)
        })
        .catch(err => console.log(err))

    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://127.0.0.1:8080/api/users/updateUser/"+ id, {firstname, lastname, email, phone})
        .then(result =>{ 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
        <div className='w-40 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Firstname</label> */}
                    <input type='text' placeholder='Firstname' className='form-control' value = {firstname} onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Lastname</label> */}
                    <input type='text' placeholder='Lastname' className='form-control'value = {lastname} onChange={(e) => setLastname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Email</label> */}
                    <input type='email' placeholder='Email' className='form-control'value = {email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor=''>Phone</label> */}
                    <input type='phone' placeholder='Phone number' className='form-control'value = {phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>

        </div>
   
    </div>
  )
}

export default UpdateUser;