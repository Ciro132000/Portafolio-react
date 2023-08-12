import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import './style.css'

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Ocurrio algo inesperado, no se pudo enviar el mensaje</Alert.Heading>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;