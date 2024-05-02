import "./Register.css"
import styled from "styled-components"

const Cadastro = styled.div`
    user-select: none;
    display: grid;
    justify-items: center;
    align-items: center;
`
const Titulo_cad = styled.div `
    font-family: "Acme", sans-serif;
    font-size: 5vh;
`
const Sub_titulo = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 2vh;
    width: 45%;
`
const Pessoa = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    gap: 10px;
    padding: 5px;
`
const Pf = styled.div`
    font-family: "Acme", sans-serif;
    font-size: 4vh;
    background-color: blue;
    width: 100%;
`
const Pj = styled.div`
    font-family: "Acme", sans-serif;
    font-size: 4vh;
    background-color: chocolate;
    width: 60%;
`
const Bt = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    gap: 10px; 
    height: 20px;
`
const Bt_pf = styled.div`
    border: none;
    /* border-radius: 60px;*/
    background-color: #d60f0f;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`
const Bt_pj = styled.div`
    border: none;
    /*border-radius: 60px;*/    
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    background-color:#00496b;
`
export default function () {
    return <>
        <Cadastro>
            <Titulo_cad>
                <div>Cadastro de usuário do cão guia</div>
            </Titulo_cad>
            <Sub_titulo>
                <div>O projeto de cão-guia oferece um treinamento especializado para preparar cães que irão auxiliar pessoas com deficiência visual, garantindo-lhes independência e mobilidade na sua rotina.</div>
            </Sub_titulo>
            <Pessoa>
                <Pf>
                    <div>Pessoa Física</div>
                </Pf>
                <Pj>
                    <div>Pessoa Jurídica</div>
                </Pj>
            </Pessoa>
            <Bt>
                <Bt_pf></Bt_pf>
                <Bt_pj></Bt_pj>
            </Bt>
        </Cadastro>
    </>
}
