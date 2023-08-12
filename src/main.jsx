import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { FirebaseAppProvider } from 'reactfire'
// import firebaseConfig from './firebase/firebase-config.jsx'

import './firebase/firebase-config'

const Preloader = () => <div>Cargando...</div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={<Preloader/>}> 
        <App />
      </Suspense>
  </React.StrictMode>,
)
