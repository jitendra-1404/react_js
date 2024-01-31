import { useEffect, useState } from "react"

export default function Github(){

    const [data,setData]=useState({})

    useEffect(()=>{
        fetch('https://api.github.com/users/jitendraSinghBisht')
        .then(res =>res.json())
        .then(resdata => {
            setData(resdata)
        })
    },[])

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex-row items-center">
            Github Followers: {data?.followers}
            <img src={data?.avatar_url} alt="profile image" />
        </div>
    )
}