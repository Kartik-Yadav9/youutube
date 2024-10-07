import React,{memo} from 'react'

function Child({learning, add}) {

    console.log('run once because wrapped in memo but not add button because of callback dependency');

  return (
    <>
    
    </>
  )
}

export default memo(Child)