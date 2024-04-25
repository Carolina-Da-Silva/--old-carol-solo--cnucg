import "./Footer.css"
import fb from "../assets/facebook.svg"
import yt from "../assets/youtube.svg"
import insta from "../assets/instagram.svg"

export default function () {
    return <>
        <footer>
            <div className="redes_sociais">
                <a href="https://www.instagram.com/ifc.oficial.camboriu/">
                    <img src={insta} alt="" /></a>
                <a href="https://www.youtube.com/ifcoficialcamboriu">
                    <img src={yt} alt="" /></a>
                <a href="https://www.facebook.com/ifccamboriu.oficial/?locale=lv_LV&_rdr">
                <img src={fb} alt="" /></a>
            </div>
            <div className="outros">
                <div className="termos"><a href="#">Termos de uso</a></div>  
                <div className="privacidade"><a href="#">Política de privacidade</a></div>
            </div>
            <div className="informacoes">
                <a href="https://www.camboriu.ifc.edu.br/">Instituto Federal de Educação, Ciência e Tecnologia Catarinense - Campus Camboriú</a>
                <div className="endereço">Rua: Joaquim Garcia, s/c - CEP 88340-055 - Camboriú - SC / Fone: (47) 2104-0800</div>
            </div>
        </footer>
    </>
}