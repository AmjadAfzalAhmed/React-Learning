import React, { useState } from "react"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AmjadAfzalAhmed')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">Github followers {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/AmjadAfzalAhmed')

    return response.json()
}