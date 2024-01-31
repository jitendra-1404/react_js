import {useParams} from 'react-router-dom';


export default function User(){

    const {id} = useParams()

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <h1>User: {id}</h1>
        </div>
    )
}