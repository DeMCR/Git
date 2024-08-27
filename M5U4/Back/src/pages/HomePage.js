import React from 'react';
import '../styles/pages/HomePage.css';

const HomePage = (props) => {
    return (



        <main className="holder">



            <div className="lema">
                <h1>El cambio empieza HOY</h1>
            </div>
            <div className="columnas">

                <section className="horarios">
                    <h2>Horario de atención</h2>
                    <p>lun 08:00 - 21:00</p>
                    <p>mar 08:00 - 21:00</p>
                    <p>mie 08:00 - 21:00</p>
                    <p>jue 08:00 - 21:00</p>
                    <p>vie 08:00 - 21:00</p>
                    <p>sab 08:00 - 18:00</p>
                    <p>dom <span>cerrado</span> </p>
                </section>
                <div className="centro">
                    <section className="servicios">
                        <div className="servicios servicio">
                            <img src="img/home/boxeo.jfif" alt="boxeo"/>
                            <div className="mask"></div>
                            <div className="content">
                                <h2>Clases de Boxeo</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate velit inventore
                                    corrupti adipisci cum nostrum esse inventore
                                </p>
                            </div>
                        </div>
                        <div className="servicios servicio">
                            <img src="img/home/funcional.png" alt="funcional"/>
                            <div className="mask"></div>
                            <div className="content">
                                <h2>Funcional</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolores amet
                                    nisi aperiam ipsum tempora officia
                                   
                                </p>
                            </div>
                        </div>
                        <div className=" servicios servicio">
                            <img src="img/home/maquina.jpeg" alt="maquinas"/>
                            <div className="mask"></div>
                            <div className="content">
                                <h2>Máquinas de Musculación</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde expedita
                                    vitae omnis quod aut, idm tempora officia
                                    
                                </p>

                            </div>
                        </div>
                        <div className=" servicios servicio">
                            <img src="img/home/tienda.jpg" alt="tienda" />
                            <div className="mask"></div>
                            <div className="content">
                                <h2>Tienda</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo iusto hic
                                    exercitationem iure corrupti fuga
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="eventos">
                    <h2>Próximos eventos</h2>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur, tenetur ullam
                        commodi
                        earum quos ut libero nisi praesentium accusantium placeat est optio magni quidem velit
                        itaque.
                        Aperiam,
                        soluta! Facere?</p>
                </section>
            </div>


        </main>
        
    


    );
}

export default HomePage;