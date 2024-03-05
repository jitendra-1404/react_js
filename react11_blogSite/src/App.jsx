import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components/index'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=> {
        if (userData){
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .finally(()=> setLoading(false))
  })

  return loading? (null):(
    <div className='bg-slate-800 h-full w-full'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
