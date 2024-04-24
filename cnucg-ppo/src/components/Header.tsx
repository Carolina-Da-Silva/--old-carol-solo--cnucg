import "./Header.css"

export default function () {
    return <>
        <header>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Instituto_Federal_Marca_2015.svg/640px-Instituto_Federal_Marca_2015.svg.png"></img>
            </div>

            <div className="search">
                <input placeholder="Pesquisa" />
            </div>
            <div className="permission-name">Meu perfil</div>
        </header>
    </>
}