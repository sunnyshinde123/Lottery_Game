import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoApp } from './TodoApp.jsx'
import Lottery from './Lottery.jsx'
import LotteryTicket from './LotteryTicket.jsx'
import Form from './Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LotteryTicket n={3} isWinningSum={15}/>
  </React.StrictMode>,
)
