import React from 'react'
import Pagina from '@/components/Pagina'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const contador = () => {

  const [qtd, setQtd] = useState(0);

  function adicionar (){
    setQtd(qtd + 1);
    console.log(qtd)
  }
  return (
    <Pagina>
      <h1>contador</h1>
      <Button onClick={adicionar}> + </Button>
      <h2 className='mt-3'>{qtd}</h2>
    </Pagina>

  )
}

export default contador