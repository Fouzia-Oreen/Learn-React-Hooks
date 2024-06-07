import  { useContext } from 'react'
import { GlobalContext } from '../Context';



const UseContext_01 = () => {

    const {setTheme, theme } = useContext(GlobalContext)


  return (
    <div>
      <h1>Use Context</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}> Change Theme </button>
    </div>
  )
}

export default UseContext_01
