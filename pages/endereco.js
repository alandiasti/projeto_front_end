import Pagina from '@/components/Pagina'
import React from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


const endereco = () => {

    const { register, handleSubmit, setValue} = useForm()

    function buscarCep(event){

        const cep = event.target.value
        

        if(cep.length == 8){

            //conexão com uma api por meio do axios 
            //buscando pelo get
            //caso queira enviar post
            axios.get('https://viacep.com.br/ws/'+ cep +'/json/').then(resultado =>{
                //console.log(resultado.data)
                const endereco = resultado.data

                setValue('uf', endereco.uf)
                setValue('cidade', endereco.localidade)
                setValue('bairro', endereco.bairro)
                setValue('logradouro', endereco.logradouro)
                setValue('complemento', endereco.complemento)
               
            })
            
        }

        
    }
    //simulando um envio
    function salvar(dados){

        //se tiver uma api pode eviar os dados
       // axios.post('htps://minhaapi.com.br/endereco',dados)
        //console.log(dados)
    }

    return (
        <Pagina>
            <h1>endereco</h1>

            <Form>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="text" {...register('cep')} onChange={buscarCep}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="uf">
                    <Form.Label>UF: </Form.Label>
                    <Form.Control type="text"  {...register('uf')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>CIDADE: </Form.Label>
                    <Form.Control type="text"  {...register('cidade')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>BAIRRO: </Form.Label>
                    <Form.Control type="text"  {...register('bairro')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>LOGRADOURO: </Form.Label>
                    <Form.Control type="text"  {...register('logradouro')}/>
                </Form.Group> <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>COMPLEMENTO: </Form.Label>
                    <Form.Control type="text"  {...register('complemento')}/>
                </Form.Group> <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>NUMERO: </Form.Label>
                    <Form.Control type="text"  {...register('numero')}/>
                </Form.Group>
                <Button variant="success" onClick={handleSubmit(salvar)}>
                    Enviar
                </Button>
            </Form>
        </Pagina>

    )
}

export default endereco