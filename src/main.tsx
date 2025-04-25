import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter'

import './styles/styles.css';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <AppRouter />
    </Provider>
  </StrictMode>,
)
