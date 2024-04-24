import "./Home.css"
import Tile from "../components/Tile"

export default function () {
    return <>
        <main>
            <Tile icon="qr_code_2" title="Validar Carteira Nacional" button="Quero verificar a autenticidade de uma carteina nacional de usuário de cão guia" />
            <Tile icon="sound_detection_dog_barking" title="Novo cadastro" button="Sou usuário de cão guia e quero me cadastrar para obter a carteina nacional de usuário de cão guia" />
            <Tile icon="assignment_ind" title="Acesso" button="Acesse o sistema para as demais funcionalidades!" />
        </main>
    </>
}
