import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Alert1() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Attention !</Alert.Heading>
          <p>
            Ce site est encore en developpement, merci d'en prendre compte, si jamais vous voyez des erreurs, merci de le signaler notre equipe (kilian.chapelle@ecole-hexagone.com)
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Fermer
            </Button>
          </div>
        </Alert>
      </>
    );
  }

  export default Alert1;