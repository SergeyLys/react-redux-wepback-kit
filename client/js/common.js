import '../css/styles.scss';

class Common {
    constructor() {
        this.headerFunctions();
    }

    headerFunctions() {
        console.log('Init common header when DOM has loaded');
    }
}

document.addEventListener('DOMContentLoaded', new Common());