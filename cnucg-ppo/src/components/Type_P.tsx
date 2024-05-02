import "./Type_P.css"
import styled from "styled-components"

const Cad_pessoa = styled.div``
const Titulo = styled.div`
    font-family: "Acme", sans-serif;
    font-size: 5vh;
`
const Sub_titulo = styled.div`
    font-family: "Acme", sans-serif;
    font-size: 4vh; 
`
const Dados = styled.div`
    font-family: "Acme", sans-serif;
    font-size: 3vh;  
`
const Nome = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 2vh;  
`
const Dt = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 2vh;  
`
interface Props{
    titulo: String
    sub_titulo: String
    dados: String
    nome: String
    data:String
    rg:String
    cpf:String
    sx: String
}

export default function (props: Props) {
    return <>
        <Cad_pessoa>
            <Titulo>
                {props.titulo}
            </Titulo>
            <Sub_titulo>
                {props.sub_titulo}
            </Sub_titulo>
            <Dados>
                {props.dados}
            </Dados>
            <Nome>
                {props.nome}
            </Nome>
            <Dt>
                {props.data}
            </Dt>
            <div className="rg">
                {props.rg}
            </div>
            <div className="cpf">
                {props.cpf}
            </div>
            <div className="sexo">
                {props.sx}
            </div>
        </Cad_pessoa>
    </>
}