import App from './homeAppExample/app';

import './common';
import '../css/home.scss';


class Home {
    constructor() {
        this.homeMethod();
    }

    homeMethod() {
        console.log('method initialized whed DOM content has loaded only on home page');
    }
}

document.addEventListener('DOMContentLoaded', new Home());