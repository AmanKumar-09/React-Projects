import React from 'react'
import  {useEffect, useState} from 'react' //for useEffect
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/AmanKumar-09')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    

  return (
    <div className='bg-gray-600 text-white text-4xl p-7 ' >Github following : {data.following} 
    <img src={data.avatar_url} alt="github-img" width={300} />
      </div>
  )
}

export default Github

export const githubInformationLoader = async () =>{
    const response = await fetch('https://api.github.com/users/AmanKumar-09')
    return response.json()  // promise
}