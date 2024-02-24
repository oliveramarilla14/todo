import { createRoot } from 'react-dom/client'
import App from './src/App'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import './src/index.css'

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
