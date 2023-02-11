import '../Componentes/Equipo.css'
import Equipo1 from '../../public/Fotos/Jennifer.png'
import Equipo2 from '../../public/Fotos/Eva scrum master.png'
import Equipo3 from '../../public/Fotos/Aldara developer.png'
import Equipo4 from '../../public/Fotos/Margarita.png'
import EquipoCompleto from '../../public/Fotos/Equipo completo.jpg'

function Equipo() {
    return (
        <section className="bloque" > <div id="teamAnchor"> <h1> Our Team </h1></div>
            <p id="texto" > We are a team of full-stack developers trying to make a change. Being deeply conscious of the gender gap in the IT industry, we decided to put our efforts into assisting and accompanying women who want to bring their bussiness to the digitial market.
                By doing so, we aim to turn the web into a safer, friendlier, and more egalitarian space for everyone. <br>
                </br>
                Will you take part on this project? Contact us! </p>
            <div className="photo-container">
                <div className="photo" id="jennifer">
                    <a href="https://www.linkedin.com/in/jennifer-cordero-rogerio-2081091b8" target="_blank">
                        <img src={Equipo1} width="230rem" height="230rem"></img></a></div>
                <div className="photo" id="eva">
                    <a href="https://www.linkedin.com/in/eva-aramburu19950913/" target="_blank">
                        <img src={Equipo2} width="230rem" height="230rem"></img></a></div>
                <div className="photo" id="aldara">
                    <a href="https://www.linkedin.com/in/aldara-mart%C3%ADnez-g%C3%A1lvez-a937a2127" target="_blank">
                        <img src={Equipo3} width="230rem" height="230rem"></img></a></div>
                <div className="photo" id="margarita">
                    <a href="https://www.linkedin.com/in/margarita-alvarez-gonz%C3%A1lez-014ab5153/" target="_blank">
                        <img src={Equipo4} width="230rem" height="230rem"></img></a></div>
            </div>
            <div className="group-photo"><img src={EquipoCompleto} width="400rem" height="260rem"></img></div>

        </section >

    )
}
export default Equipo