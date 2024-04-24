import "./Tile.css"

interface Props {
    title: String
    button: String
    icon: String
}

export default function (props: Props) {
    return <>
        <div className="menu-item clickable show">
            <div className="title">
                {props.title}
            </div>
            <span className="icon material-symbols-outlined">
                {props.icon}
            </span>
            <div className="actions">
                <button data-permission="any only-unlogged" className="show">
                    {props.button}
                </button>
            </div>
        </div>
    </>
}