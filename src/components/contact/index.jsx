import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import emailjs from "@emailjs/browser";
import AlertDismissibleExample from "../Alert/alertError";

function Contact() {
  const refForm = useRef();

  // VALICACION DEL FORMULARIO

  const [sendMessage, setSendMessage] = useState(false);
  const [erroSendMessage, setErroSendMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }

    if (!formData.subject) {
      newErrors.subject = "El asunto es obligatorio";
    }

    if (!formData.message) {
      newErrors.message = "El mensaje es obligatorio";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const apiKey = import.meta.env.VITE_EMAIL_API_KEY;

      emailjs
        .sendForm(serviceId, templateId, refForm.current, apiKey)
        .then((result) => {
          const res = result.text;
          if ((res = "OK")) {
            setSendMessage(true);

            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          }
        })
        .catch((error) => {
          setErroSendMessage(true);
        });

      setTimeout(() => {
        setSendMessage(false);
        setErroSendMessage(false);
      }, 4000);
    } else {
      console.log("Formulario no válido, revisa los errores");
      setTimeout(() => setErrors({}), 4000);
    }
  }

  return (
    <div className="Skills-div">
      {erroSendMessage ? <AlertDismissibleExample /> : ""}

      <div className="container ">
        <h2 className="Title-h2">Contáctame</h2>
        <p>
          <strong>¿Listo para dar vida a tu proyecto?</strong> ¡Hablemos! Estoy
          aquí para escuchar tus ideas, colaborar contigo y transformarlas en
          resultados excepcionales. Contacta conmigo y comencemos a crear juntos
          algo increíble
        </p>
        <form
          className="Form-contact"
          ref={refForm}
          action=""
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col">
              <div
                className={`${"form-floating mb-3"} ${
                  errors.email ? "input-invalid" : ""
                }`}
              >
                <input
                  type="email"
                  className={`${"form-control"} `}
                  id="correo"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label for="correo">Correo</label>
                <span>{errors.email}</span>
              </div>
            </div>
            <div className="col">
              <div
                className={`${"form-floating mb-3"} ${
                  errors.name ? "input-invalid" : ""
                }`}
              >
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre completo"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label for="nombre" className="form-label">
                  Nombre
                </label>
                <span>{errors.name}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className={`${"form-floating mb-3"} ${
                errors.subject ? "input-invalid" : ""
              }`}
            >
              <input
                type="text"
                className="form-control"
                id="asunto"
                placeholder="Asunto o tema"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <label for="asunto" className="form-label">
                Asunto
              </label>
              <span>{errors.subject}</span>
            </div>
          </div>

          <div className="row">
            <div
              className={`${"form-floating mb-3"} ${
                errors.message ? "input-invalid" : ""
              }`}
            >
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <label for="floatingTextarea2">Mensaje</label>
              <span>{errors.message}</span>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            {!sendMessage ? (
              <button type="submit" className="btn Contact-btn">
                Enviar
              </button>
            ) : (
              <div className="sendMessage">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>Mensaje enviado</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
