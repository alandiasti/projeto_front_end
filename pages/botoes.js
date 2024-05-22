import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'

const botoes = () => {
    return (
        <Pagina>
            <h1>Botões</h1>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
        </Pagina>
    )
}

export default botoes