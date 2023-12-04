import page from './modules/template.js';
import './index.css';
import mainScript from './modules/scripts/main-script';

const body = document.querySelector('body');
body.appendChild(page());

mainScript()

