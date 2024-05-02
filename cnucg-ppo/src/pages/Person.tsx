import "./Person.css"
import Type_P from "../components/Type_P"

export default function () {
    return <>
        <div className="person-container">
            <Type_P titulo="Cadastro de usuário do cão guia" 
                    sub_titulo="•Pessoa Física" 
                    dados="Dados de Identificação"
                    nome="Nome completo"
                    data="Data de nascimento"
                    rg="RG"
                    cpf="CPF"
                    sx="Sexo"
            />
        </div>
    </>
}