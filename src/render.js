import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMail} from "./mailData";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (messagesData) => {
    root.render(
        <React.StrictMode>
            <App messagesData={messagesData} addMail={addMail}/>
        </React.StrictMode>
    );
}
