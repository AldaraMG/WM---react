import '../Componentes/LogoTitulo.css'
import Logo from '../../public/WM logo letras blancas cortado.png'


function LogoTitulo() {
    return(
        <section className="bloque" >
            <div id="fotoportada" > 
            < img src={Logo} alt="logo-WM"></img>
            <p id="subtitulo-wm" > W M </p>
            <p id="subtitulo" > Empowering & Developing </p>
            <p id="subtitulo-tec" > Technology Consulting </p>
            </div>
        </section> 
    )

}

export default LogoTitulo