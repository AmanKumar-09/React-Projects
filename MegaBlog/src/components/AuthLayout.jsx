import React, { useState, useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'

export default function Protected({ children, authentication 
  = true }) {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    // TODO: make it more easy to under stand

    // if (authStatus === true){
    //   navigate("/")
    // } else if (authStatus === false){
    //   navigate("/login")
    // }

    let authValue = authStatus === true ? true : false 

    if(authentication && authStatus !== authentication){
      navigate("/login")
    } else if (!authentication && authStatus !== authentication) {
      navigate("/")
    }
    setLoader(false)

  }, [authStatus, navigate])

  return loader ? <h1>Loading...</h1> : <>{children}</>

  
}
