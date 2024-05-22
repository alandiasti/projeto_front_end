import Pagina from '@/components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const disney = () => {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        axios.get('https://api.disneyapi.dev/character').then(resultado => {

            //console.log(resultado.data.data)
            setPersonagens(resultado.data.data)
        })
    }, [])
    return (
        <Pagina>
            <h1>API da Disney</h1>

            <Row md={6}>

                {personagens.map(item => (
                    //<p>{item.name}</p>
                    <Col key={item._id} className='mt-3'>
                        <Card >
                            <Card.Img variant="top" src={item.imageUrl} height={200}/>
                            <Card.Body>
                                <Card.Text>{item.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>


        </Pagina>
    )
}

export default disney