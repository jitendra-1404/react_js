import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className=' flex items-center justify-center flex-col p-4'>
      <h1 className='m-4 p-2 text-4xl text-slate-200'>Todo using Redux-toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
