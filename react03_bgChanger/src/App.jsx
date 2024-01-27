import { useState } from 'react' ;

function App() {
  const [color, setColor] = useState("Olive");
  const colors = ['Red','Green','Blue','Olive','Orange','Black','Brown','Violet']
  return (
    <>
      <div className='root w-full h-screen duration-200 flex flex-wrap justify-around' style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap bg-zinc-600 justify-center bottom-12 insert-x-0 px-2 rounded-full text-white">
          {colors.map(divcolor => (
              <div className="flex cursor-pointer flex-wrap justify-center gap-5 shadow-lg rounded-lg p-2 m-4" 
              style={{backgroundColor: divcolor}} key={divcolor} onClick={()=>setColor(divcolor)}>{divcolor}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
