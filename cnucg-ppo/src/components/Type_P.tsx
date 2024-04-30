import "./Type_P.css";

interface Props{
    titulo: String
    sub_titulo: String
    dados: String

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