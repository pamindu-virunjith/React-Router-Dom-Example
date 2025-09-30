import React, {useReducer}from 'react'



function UseReducerEx() {
    function reducer(state, action){
        switch(action.type){
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return{count: state.count - 1}
            default:
                return state
    
        }
        
    }
    const[state, dispatch] = useReducer(reducer,{count:0})

    function increment(){
        dispatch({type: 'increment'})
    }
    function decrement(){
        dispatch({type: 'decrement'})
    }

  return (
    <>
    <div>UseReducerEx</div>
    <button onClick={decrement}>-</button>
    <p>{state.count}</p>
    <button onClick={increment}>+</button>
    </>
  )
}

export default UseReducerEx