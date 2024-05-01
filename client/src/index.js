import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AddChain from './AddChain';
import CreateLocation from './CreateLocation';
import CreateMenuItem from './CreateMenuItem';
import CreateFoodType from './CreateFoodType';
import ChainMain from './ChainMain';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Signup" element = {<Signup/>}/>
    <Route path = "/Home" element = {<Home/>}/>
    <Route path = "/AddChain" element = {<AddChain/>}/>
    <Route path = "/CreateLocation" element = {<CreateLocation/>}/>
    <Route path = "/CreateMenuItem" element = {<CreateMenuItem/>}/>
    <Route path = "/CreateFoodType" element = {<CreateFoodType/>}/>
    <Route path = "/chain/:chain_id" element={<ChainMain/>}/>
    </>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();

