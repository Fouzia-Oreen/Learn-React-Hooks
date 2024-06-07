import {useEffect, useRef} from 'react'

const UseRef_01 = () => {

    const countValue = useRef(0)
    // increase the countValue by 1
    const divReference = useRef(0)
    // on page load
    const inputReference = useRef()
    // on page load

    function handleClick() {
        countValue.current++
        console.log(countValue.current);
    }
    // on page load shows hello on console
    useEffect(() => {
        const getDivReference = divReference.current
        console.log(getDivReference);
    }, [])

    useEffect(() => {
          inputReference.current.focus()
    }, [])

  return (
    <div>
      <h1>Use Ref Hook</h1>  
      <button onClick= {handleClick}>Click Me</button>
      <div  ref={divReference} className="hello">Hello World</div>
      <input  ref={inputReference} type="text" placeholder='Enter Some Points ...' />
    </div>
  )
}

export default UseRef_01
