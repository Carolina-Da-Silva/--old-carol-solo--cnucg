import "./Type_P.css";

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
        <div className="cad_pessoa">
            <div className="titulo">
                {props.titulo}
            </div>
            <div className="sub_titulo">
                {props.sub_titulo}
            </div>
            <div className="dados">
                {props.dados}
            </div>
            <div className="nome">
                {props.nome}
            </div>
            <div className="dt">
                {props.data}
            </div>
            <div className="rg">
                {props.rg}
            </div>
            <div className="cpf">
                {props.cpf}
            </div>
            <div className="sexo">
                {props.sx}
            </div>
        </div>
    </>
}

/* 

        
        <span className="icon material-symbols-outlined">
            {props.icon}
        </span>
        
        <div className="actions">
            <button data-permission="any only-unlogged" className="show">
                {props.button}
            </button>
        </div>
*/