import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"
import Login from './Login'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<div className='g-signin'>
<Login/>
</div>

{/* <App /> */}

</>

);


