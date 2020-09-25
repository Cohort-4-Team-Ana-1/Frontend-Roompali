import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.scss'
import axios from 'axios'

axios.defaults.baseURL = 'https://backend-roompali.vercel.app/api'

ReactDOM.render(

  <App/>,

  document.getElementById('root')
);

