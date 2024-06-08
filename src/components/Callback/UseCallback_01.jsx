// useCallback will memorise a function
import {useCallback, useState} from 'react'
import Child from './comp-three'

const UseCallback_01 = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

     const memoriseSetCountOneFunction = useCallback(() => setCount1(count1 + 1), [count1])
     const memoriseSetCountTwoFunction = useCallback(() => setCount2(count2 + 1), [count2])


  return (
    <div>
      {count1}{count2}
      <Child text ={'Button One'} onClick={memoriseSetCountOneFunction} />
      <Child text ={'Button Two'} onClick={memoriseSetCountTwoFunction}/>

    </div>
  )
}

export default UseCallback_01
