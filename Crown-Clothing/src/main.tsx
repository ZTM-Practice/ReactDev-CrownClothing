import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
