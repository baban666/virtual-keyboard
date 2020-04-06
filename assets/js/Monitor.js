import { Keyboard } from './Keyboard.js';

export class Monitor {

    constructor(){
        this.defaultText = ''.split('')
    }

    updateScreen = (text) => {
        let screen = document.getElementById('screen')
        let kp = document.getElementById('kp')
        let template = `<textarea id="kp">${text.join('')}</textarea>`;
        screen.innerHTML = template
    };



    // Button generator
    renderMonitor(rootTagId, text = this.defaultText) {
        const getRoot = new Keyboard;
        let template = `
        <div id="screen" class="monitor">
            <textarea id="kp" placeholder="Change language ShiftLeft + AltLeft...">${text.join()}</textarea>
        </div>
        <div class="monitorstand"></div>`;

        let root = getRoot.getRoot(rootTagId)
        let monitor = document.createElement('div');
        monitor.innerHTML = template;
        root.before(monitor);
    }
}
