import '../Componentes/Footer.css'
import LogoFinal from '../../public/Logo/WM logo letras blancas.png'
import IconoF from '../../public/iconos/facebook.png'
import IconoL from '../../public/iconos/linkedin.png'
import IconoI from '../../public/iconos/instagram.png'
import IconoG from '../../public/iconos/gorjeo.png'
import IconoP from '../../public/iconos/privacy.png'

function Footer() {
    return (
        <><><><footer className="bloque footer1">
            <nav className="navbar2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={LogoFinal} alt="Logo" width="100" height="100" class="d-inline-block align-text-top"></img>

                    </a>
                </div>
            </nav>
        </footer>
            <footer className="bloque footer2">
                <div className="foot-text">
                    <p> Contact us </p>
                    <div className="email">

                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type here your e-mail"></input>
                    </div>
                    <input type="submit" value="Send"></input>
                </div>
            </footer></>
            <footer className="bloque footer3">
                <div className="follow"></div>

                <div className="imagen" id="facebook"><img src={IconoF} alt="facebook" width="37.5rem" height="37.5rem"></img></div>
                <div className="imagen" id="linkedin"><img src={IconoL} alt="linkedin" width="37.5rem" height="37.5rem"></img></div>
                <div className="imagen" id="initial-scale"><img src={IconoI} alt="instagram" width="37.5rem" height="37.5rem"></img></div>
                <div className="imagen" id="gorjeo"><img src={IconoG} alt="gorjeo" width="37.5rem" height="37.5rem"></img></div>
            </footer></><footer className="bloque footer4">
                <div className="foot-text"> PrivacyPolicy </div>

                <div className="imagen" id="privacy"> <img src={IconoP} alt="privacy" width="65rem" height="65rem"></img></div>
            </footer></> 
        
        

    )
}
export default Footer