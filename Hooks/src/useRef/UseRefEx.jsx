import React,{useRef, useState, useEffect} from 'react'

function UseRefEx() {
    const [name, setName] = useState('')
    const renCount = useRef(1)

    useEffect(() => {
      console.log(renCount)
      renCount.current = renCount.current + 1
    })

  return (
    <>
      <h3 style={{textAlign:'center'}}>This is useRef my example</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I renderd {renCount.current} times</div>
  </>
  )
}

export default UseRefEx