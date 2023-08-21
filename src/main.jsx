import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Loading from './components/loading'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { FirebaseAppProvider } from 'reactfire'
// import firebaseConfig from './firebase/firebase-config.jsx'

import {DataContextProvider} from './context/DataProvider'

import './firebase/firebase-config'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
        <App/>
    </DataContextProvider>
  </React.StrictMode>,
)
