import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    let navigate = useNavigate()

    let [credentials,changeCredentials] = useState({username:'',password:''})

    async function loginAPI(event){


        event.preventDefault()

        let url = 'http://127.0.0.1:8000/login/'

        let response = await axios.post(url,credentials)


        if (response.status === 200 ) {

            localStorage.setItem('accessToken',response.data.access_token)

            navigate('/')

        }

        else{

            console.log(response.data.msg)

        } 

    }

  return (
    <div class="container min-vh-100 d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow-sm" style={{width: "100%", maxWidth: "400px"}}>
      <h4 class="text-center mb-4">Login</h4>
      <form onSubmit={event=>{loginAPI(event)}}>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" value={credentials.username} onChange={event=>changeCredentials({...credentials,username:event.target.value})} class="form-control" id="email" placeholder="Enter email" required/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" value={credentials.password} onChange={event=>changeCredentials({...credentials,password:event.target.value})} class="form-control" id="password" placeholder="Password" required/>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login