import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'

import '@ant-design/v5-patch-for-react-19';

import { AppRouter } from './router/AppRouter'
import { store } from './store/store';
import './styles/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <AppRouter />
    </Provider>
  </StrictMode>,
)
