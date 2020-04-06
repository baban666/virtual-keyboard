import { Keyboard } from './Keyboard.js';
import { Monitor } from './Monitor.js';
import {data} from "./key-codes.js";


    const keyboard = new Keyboard;
    const screen = new Monitor;

const root = `<div id="root"></div>`;

document.body.innerHTML = root


  const settings = {
      lang: localStorage.getItem('language'),
      capsLock: localStorage.getItem('capsLock'),
  };

   (!settings.lang) ? settings.lang = localStorage.setItem('language', 'en') : settings.lang;
   (!settings.capsLock) ? settings.capsLock = localStorage.setItem('capsLock', '0') : settings.capsLock;

screen.renderMonitor('root');
keyboard.renderButtonsToDom('root', settings.lang);

let capsLock = document.getElementById('20');

(settings.capsLock == '1') ? capsLock.classList.add('activate-caps') : settings.capsLock;

const getChar = (data, keyCode) => {
    let char = {};
    data.forEach((item) => {
        if (item['keyCod'] == keyCode){
            char = item;
        }
    });
    return char;
};

const getCharPosition = () => {
    let myElement = document.getElementById('kp');
    let startPosition = myElement.selectionStart;
    return startPosition;
};

const setLanguage = () => {
    if(!localStorage.getItem('language') || localStorage.getItem('language') == 'en'){
        localStorage.setItem('language', 'ru');
    }else {
        localStorage.setItem('language', 'en');

    }
};

const setCapsLock = () => {
    if(!localStorage.getItem('capsLock') || localStorage.getItem('capsLock') == '0'){
        localStorage.setItem('capsLock', '1');
        capsLock.classList.add('activate-caps');
    }else {
        localStorage.setItem('capsLock', '0');
        capsLock.classList.remove('activate-caps');
    }
};

const getCapsLock = () => {
    let result = false;

    if(localStorage.getItem('capsLock') == '1'){
        result = true;
    }
  return result;
};

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });
}

let monitor = document.getElementById('kp');
monitor.focus();
let text = [];


runOnKeys(
    () => {
        setLanguage();
        keyboard.renderButtonsToDom('root', localStorage.getItem('language') );
        screen.updateScreen(text);
        clickHandler();
    },
    "ShiftLeft", "AltLeft"
);

runOnKeys(
    () => {
        setCapsLock();
    },
    "CapsLock"
);

runOnKeys(
    () => {
        text.push(`&nbsp;`)
        let elem = document.getElementById('9');
        elem.classList.remove('activate');
        elem.classList.remove('color');
    },
    "Tab"
);


document.addEventListener('keydown', function(e) {

    monitor.focus();

    let keyCode = e.which || e.keyCode;
    let elem = document.getElementById(keyCode.toString());

    let char = getChar(data, keyCode);
    let isDigit = (keyCode >= 48 && keyCode <= 57 ) ? true : false;
    let isEng = (localStorage.getItem('language') == 'en') ? true : false;

    switch (keyCode) {
        case 8:
            const input = document.getElementById('kp');
            input.oninput = function() {
                text = input.value.split('');
            };
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            e.preventDefault();
            break;
        case 9:
            e.preventDefault();
            monitor.focus();
            (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, `\t`) : text.splice(text.length, 0,  `\t`);
            screen.updateScreen(text);
            break;
        case 32:
            e.preventDefault();
            monitor.focus();
            (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, ` `) : text.splice(text.length, 0,  ` `);
            screen.updateScreen(text);
            break;
        case 13:
            break;
        case 20:
            break;
        case 37:
        case 38:
        case 39:
        case 40:
            break;
        case 187:
        case 189:
        case 191:
        case 220:
            monitor.focus();
            if (getCharPosition() != 0 ){
                if(isEng){
                    monitor.focus();
                    (e.shiftKey) ? text.splice(getCharPosition(), 0, char.spanTag) : text.splice(getCharPosition(), 0, char.value);
                    screen.updateScreen(text);
                }else {
                    monitor.focus();
                    text.splice(getCharPosition(), 0, elem.innerText);
                    screen.updateScreen(text);
                }
            }else {
                if(isEng){
                    monitor.focus();
                    (e.shiftKey) ? text.splice(text.length, 0, char.spanTag) : text.splice(text.length, 0, char.value);
                    screen.updateScreen(text);
                }else {
                    monitor.focus();
                    (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, elem.innerText.toUpperCase()[0]) : text.splice(text.length, 0, elem.innerText.toLowerCase()[2]);
                    screen.updateScreen(text);
                }
            }

            break;
        case 186:
        case 188:
        case 190:
        case 192:
        case 219:
        case 221:
        case 222:
            monitor.focus();
            if (getCharPosition() != 0 ){
                if(isEng){
                    monitor.focus();
                    (e.shiftKey) ? text.splice(getCharPosition(), 0, char.spanTag) : text.splice(getCharPosition(), 0, char.value);
                    screen.updateScreen(text);
                }else {
                    monitor.focus();
                    text.splice(getCharPosition(), 0, elem.innerText);
                    screen.updateScreen(text);
                }
            }else {
                if(isEng){
                    monitor.focus();
                    (e.shiftKey) ? text.splice(text.length, 0, char.spanTag) : text.splice(text.length, 0, char.value);
                    screen.updateScreen(text);
                }else {
                    monitor.focus();
                    (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, elem.innerText.toUpperCase()) : text.splice(text.length, 0, elem.innerText.toLowerCase());
                    screen.updateScreen(text);
                }
            }
            break;
        default:
            monitor.focus();
            if (getCharPosition() != 0 ){
                if(isDigit){
                    monitor.focus();
                    (e.shiftKey) ? text.splice(getCharPosition(), 0, char.spanTag) : text.splice(getCharPosition(), 0, char.value);
                    screen.updateScreen(text);
                }else {
                    monitor.focus();
                    text.splice(getCharPosition(), 0, elem.innerText);
                    screen.updateScreen(text);
                }
            }else {
                if(isDigit){
                    monitor.focus();
                    (e.shiftKey) ? text.splice(text.length, 0, char.spanTag) : text.splice(text.length, 0, char.value);
                    screen.updateScreen(text);
                }else {
                    monitor.focus();
                    (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, elem.innerText.toUpperCase()) : text.splice(text.length, 0, elem.innerText.toLowerCase());
                    screen.updateScreen(text);
                }
            }
    };


    elem.classList.add('activate');
    elem.classList.add('color');

});

document.addEventListener('keyup', function(e) {
    monitor.focus();
    let keyCode = e.which || e.keyCode;
    let elem = document.getElementById(keyCode.toString());



    if(elem.classList.contains('activate')){
        elem.classList.remove('activate');
    }

    if(elem.classList.contains('color')){
        elem.classList.remove('color');
    }



});

const clickHandler = () => {
    const buttons = document.querySelectorAll('.col')

    buttons.forEach((button) => {

        button.addEventListener('click', function(e) {

            let keyCode = button.getAttribute('id');

            let elem = document.getElementById(keyCode.toString());

            let char = getChar(data, keyCode);
            let isDigit = (keyCode >= 48 && keyCode <= 57 ) ? true : false;
            let isEng = (localStorage.getItem('language') == 'en') ? true : false;


            switch (Number(keyCode)) {
                case 8:
                    if (getCharPosition() != 0 ){
                        text.splice(getCharPosition() - 1, 1);
                        screen.updateScreen(text);
                    }else {
                        text.pop();
                        screen.updateScreen(text);
                    }
                    const input = document.getElementById('kp');
                    input.oninput = function() {
                        text = input.value.split('');
                    };
                    break;
                case 16:
                    break;
                case 17:
                    break;
                case 18:
                    e.preventDefault();
                    break;
                case 9:
                    e.preventDefault();
                    monitor.focus();
                    (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, `\t`) : text.splice(text.length, 0,  `\t`);
                    screen.updateScreen(text);
                    break;
                case 13:
                    monitor.focus();
                    (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, `\n`) : text.splice(text.length, 0,  `\n`);
                    screen.updateScreen(text);
                    break;
                case 20:
                    setCapsLock();
                    e.preventDefault();
                    break;
                case 32:
                    monitor.focus();
                    (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, ` `) : text.splice(text.length, 0,  ` `);
                    screen.updateScreen(text);
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                case 91:
                    break;
                case 187:
                case 189:
                case 191:
                case 220:
                    monitor.focus();
                    if (getCharPosition() != 0 ){
                        if(isEng){
                            monitor.focus();
                            (e.shiftKey) ? text.splice(getCharPosition(), 0, char.spanTag) : text.splice(getCharPosition(), 0, char.value);
                            screen.updateScreen(text);
                        }else {
                            monitor.focus();
                            text.splice(getCharPosition(), 0, elem.innerText);
                            screen.updateScreen(text);
                        }
                    }else {
                        if(isEng){
                            monitor.focus();
                            (e.shiftKey) ? text.splice(text.length, 0, char.spanTag) : text.splice(text.length, 0, char.value);
                            screen.updateScreen(text);
                        }else {
                            monitor.focus();
                            (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, elem.innerText.toUpperCase()[0]) : text.splice(text.length, 0, elem.innerText.toLowerCase()[2]);
                            screen.updateScreen(text);
                        }
                    }

                    break;
                case 186:
                case 188:
                case 190:
                case 192:
                case 219:
                case 221:
                case 222:
                    monitor.focus();
                    if (getCharPosition() != 0 ){
                        if(isEng){
                            monitor.focus();
                            (e.shiftKey) ? text.splice(getCharPosition(), 0, char.spanTag) : text.splice(getCharPosition(), 0, char.value);
                            screen.updateScreen(text);
                        }else {
                            monitor.focus();
                            text.splice(getCharPosition(), 0, elem.innerText);
                            screen.updateScreen(text);
                        }
                    }else {
                        if(isEng){
                            monitor.focus();
                            (e.shiftKey) ? text.splice(text.length, 0, char.spanTag) : text.splice(text.length, 0, char.value);
                            screen.updateScreen(text);
                        }else {
                            monitor.focus();
                            (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, elem.innerText.toUpperCase()) : text.splice(text.length, 0, elem.innerText.toLowerCase());
                            screen.updateScreen(text);
                        }
                    }
                    break;

                default:
                    monitor.focus();
                    if (getCharPosition() != 0 ){
                        if(isDigit){
                            monitor.focus();
                            (e.shiftKey) ? text.splice(getCharPosition(), 0, char.spanTag) : text.splice(getCharPosition(), 0, char.value);
                            screen.updateScreen(text);
                        }else {
                            monitor.focus();
                            text.splice(getCharPosition(), 0, elem.innerText);
                            screen.updateScreen(text);
                        }
                    }else {
                        if(isDigit){
                            monitor.focus();
                            (e.shiftKey) ? text.splice(text.length, 0, char.spanTag) : text.splice(text.length, 0, char.value);
                            screen.updateScreen(text);
                        }else {
                            monitor.focus();
                            (!(e.shiftKey && getCapsLock()) && (e.shiftKey || getCapsLock())) ? text.splice(text.length, 0, elem.innerText.toUpperCase()) : text.splice(text.length, 0, elem.innerText.toLowerCase());
                            screen.updateScreen(text);
                        }
                    }
            };

        });

    });

};


clickHandler();



// Как сделать при клике мышкой эмитацию клика по клавиатуре например кнопка Win?
// Как сохранять каретку на месте?
// Как сделать добавление и удаление если каретка в нулевой позиции?

