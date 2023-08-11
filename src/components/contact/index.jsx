
import './style.css'

function Contact() {
    return(
        <div className="container">
            <h2 className="Title-h2">Contáctame</h2>
            <p>
            <strong>¿Listo para dar vida a tu proyecto?</strong> ¡Hablemos! Estoy aquí para escuchar tus ideas, colaborar contigo y transformarlas en resultados excepcionales. Contacta conmigo y comencemos a crear juntos algo increíble
            </p>
            {/* <form>
                <div className="row g-2">
                <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Email</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
                </div>

            
            </form> */}

<form className="Form-contact">
    <div className="row">
        <div className="col">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="correo" placeholder="name@example.com"/>
                <label for="correo">Correo</label>
            </div>

        </div>
        <div className="col">
            <div className="mb-3 form-floating">
                <input type="text" className="form-control" id="nombre" placeholder="Nombre completo"/>
                <label for="nombre" className="form-label">Nombre</label>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="mb-3 form-floating">
            <input type="text" className="form-control" id="asunto" placeholder="Asunto o tema" />
            <label for="asunto" className="form-label">Asunto</label>
        </div>
    </div>

    <div className="row">
        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
        <label for="floatingTextarea2">Mensaje</label>
        </div>
    </div>


    <div className="d-flex justify-content-center align-items-center">
        <button type='submit' className='btn Contact-btn'>Enviar</button>

    </div>



</form>


        </div>
    )
}

export default Contact;