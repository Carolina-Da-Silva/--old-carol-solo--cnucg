import "./Register.css"

export default function () {
    return <>
        <div className="cadastro">
            <div className="titulo_cad">
                <div>Cadastro de usuário do cão guia</div>
            </div>
            <div className="sub_titulo">
                <div>O projeto de cão-guia oferece um treinamento especializado para preparar cães que irão auxiliar pessoas com deficiência visual, garantindo-lhes independência e mobilidade na sua rotina.</div>
            </div>
            <div className="pessoa">
                <div className="pf">
                    <div>Pessoa Física</div>
                </div>
                <div className="pj">
                    <div>Pessoa Jurídica</div>
                </div>
            </div>
            <div className="bt">
                <button className="bt_pf"></button>
                <button className="bt_pj"></button>
            </div>
        </div>
    </>
}
