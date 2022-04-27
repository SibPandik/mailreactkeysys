import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import messagesData from "./mailData";
import { rerenderEntireTree } from './render'


rerenderEntireTree(messagesData);
reportWebVitals();
