import '../Componentes/Carrusel.css'
import Fotos from '../../public/iloveimg-resized/1.png'
import Fotos2 from '../../public/iloveimg-resized/2.png'
import Fotos3 from '../../public/iloveimg-resized/3.png'
import Fotos4 from '../../public/iloveimg-resized/4.png'
import Fotos5 from '../../public/iloveimg-resized/5.png'
import Fotos6 from '../../public/iloveimg-resized/6.png'
import Fotos7 from '../../public/iloveimg-resized/7.png'
import Fotos8 from '../../public/iloveimg-resized/8.png'
import Fotos9 from '../../public/iloveimg-resized/9.png'

function Carrusel() {
    return (

        <section className="bloque"> <div id="servicesAnchor"> <h1> Our Services </h1> </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Fotos} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Fotos2} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item ">
                        <img src={Fotos3} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item ">
                        <img src={Fotos4} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item ">
                        <img src={Fotos5} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Fotos6} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Fotos7} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Fotos8} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Fotos9} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>
        </section>


    )
}

export default Carrusel
