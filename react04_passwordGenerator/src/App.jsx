import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [len, setLen] = useState(8);
  const [symb, setSymb] = useState(false);
  const [num, setNum] = useState(false);
  const [password, setPassword] = useState('');

  const passwdRef = useRef(null);

  const passgen = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (num) str+='0123456789';
    if (symb) str+='!@#$%^&*()[]{}<>?/_+-=';
    for (let i = 0; i < len; i++) {
      const ch = Math.floor(Math.random() * str.length+1 );
      pass+=str.charAt(ch);
    }
    setPassword(pass);
  },[len,symb,num,setPassword]);

  const copyPasswd = useCallback(()=>{
    passwdRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{passgen()},[len, symb, num, setPassword, passgen]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-3xl px-4 py-3 my-8 bg-zinc-600'>
        <h1 className='text-center text-white my-3 text-4xl'>Password Generator</h1>
        <div className='flex shadow rounded-3xl overflow-hidden mb-4'>
          <input type="text" value={password} readOnly ref={passwdRef} className=' outline-none w-full py-1 px-3'/>
          <button onClick={copyPasswd} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex justify-between text-lg text-orange-500 gap-x-3'>
          <div className="flex items-center gap-x-1">
            <label>Length:{len}</label>
            <input type="range" min={6} max={25} value={len} onChange={(e)=>setLen(e.target.value)}/>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="number" onChange={()=>setNum((pre)=> !pre)}/>
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="symbol" onChange={()=>setSymb((pre)=> !pre)}/>
            <label>Symbols</label>
          </div>
        </div>
        <div className=' flex justify-center text-xl text-white mt-3'>
          <button onClick={passgen} className='bg-red-500 p-2 rounded-2xl'>Regenrate</button>
        </div>
      </div>
    </>
  )
}

export default App
