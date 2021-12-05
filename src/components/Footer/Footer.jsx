import { VscGithubInverted } from 'react-icons/vsc'
import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <span className="span-footer">Feito por Priscila Souza <a className="git" href="https://github.com/priKSouza"><VscGithubInverted/></a></span>
        </div>
    )
}

export default Footer