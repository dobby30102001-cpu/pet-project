import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css'
import './style/tabbar.css'
import './style/header.css'
import './style/group.css'
import './style/login.css'
import './style/notfound.css'
import "bootstrap/dist/css/bootstrap.min.css"; // nếu bạn dùng bootstrap
import "./style/admin.css";                     // CSS của bạn phải đứng SAU bootstrap




import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
