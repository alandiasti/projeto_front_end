import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert } from 'react-bootstrap'

const alertas = () => {
  return (
    <Pagina>
        <h1>Alertas</h1>

        <Alert> Isso é um alerta</Alert>
        <Alert variant='danger'> Isso é um alerta</Alert>
        <Alert variant='success'> Isso é um alerta</Alert>
        <Alert variant='warning'> Isso é um alerta</Alert>
    </Pagina>
  )
}

export default alertas