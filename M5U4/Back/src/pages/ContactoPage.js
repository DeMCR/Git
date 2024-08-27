import React from 'react';
import '../styles/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder-contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form className="formulario" action="" method="" >
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="telefono">Télefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>

                <div>
                    <div className="datos">
                        <h2>También puedes encontrarnos a través de los siguientes medios</h2>
                        <ul>
                            <li>Télefono: 1 234 5678</li>
                            <li>correo: fuerzalimite@outlook.com</li>
                            <li>Instagram:</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>

            </div>
        </main>
    );

}

export default ContactoPage;