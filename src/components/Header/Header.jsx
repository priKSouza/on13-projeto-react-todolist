import LogoImage from "../../assets/listremove.svg"
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div>
                <img className="img-header" src={LogoImage} alt="logotipo com ilustração de avião de papel" />
            </div>
        </header>
    )
}

export default Header