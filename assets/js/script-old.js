// import { Keyboard } from './Keyboard.js';
// import { Monitor } from './Monitor.js';
// import {data} from "./key-codes.js";
//
//
//     const keyboard = new Keyboard;
//     const screen = new Monitor;
//
//
//   const settings = {
//       lang: localStorage.getItem('language'),
//       capsLock: localStorage.getItem('capsLock'),
//   };
//
//    (!settings.lang) ? settings.lang = localStorage.setItem('language', 'en') : settings.lang;
//    (!settings.capsLock) ? settings.capsLock = localStorage.setItem('capsLock', '0') : settings.capsLock;
//
// screen.renderMonitor('root');
// keyboard.renderButtonsToDom('root', settings.lang);
//
// let capsLock = document.getElementById('20');
//
// (settings.capsLock == '1') ? capsLock.classList.add('activate-caps') : settings.capsLock;
//
//
//
// const getChar = (data, keyCode) => {
//     let char = {};
//     data.forEach((item) => {
//         if (item['keyCod'] == keyCode){
//             char = item
//         }
//     });
//     return char
// };
//
//
//
// const getCharPosition = () => {
//     let myElement = document.getElementById('kp');
//
//     let startPosition = myElement.selectionStart;
//     //let endPosition = myElement.selectionEnd;
//     myElement.focus()
//     return startPosition
// };
//
//
// const setLanguage = () => {
//     if(!localStorage.getItem('language') || localStorage.getItem('language') == 'en'){
//         localStorage.setItem('language', 'ru');
//     }else {
//         localStorage.setItem('language', 'en');
//
//     }
// };
//
//
// const setCapsLock = () => {
//     if(!localStorage.getItem('capsLock') || localStorage.getItem('capsLock') == '0'){
//         localStorage.setItem('capsLock', '1');
//         capsLock.classList.add('activate-caps');
//     }else {
//         localStorage.setItem('capsLock', '0');
//         capsLock.classList.remove('activate-caps');
//     }
// };
//
// const getCapsLock = () => {
//     let result = false;
//
//     if(localStorage.getItem('capsLock') == '1'){
//         result = true;
//     }
//   return result;
// };
//
//
// function runOnKeys(func, ...codes) {
//     let pressed = new Set();
//     document.addEventListener('keydown', function(event) {
//         pressed.add(event.code);
//
//         for (let code of codes) {
//             if (!pressed.has(code)) {
//                 return;
//             }
//         }
//         pressed.clear();
//         func();
//     });
//
//     document.addEventListener('keyup', function(event) {
//         pressed.delete(event.code);
//     });
// }
//
// runOnKeys(
//     () => {
//         setLanguage();
//         keyboard.renderButtonsToDom('root', localStorage.getItem('language') );
//     },
//     "ShiftLeft", "AltLeft"
// );
//
//
// runOnKeys(
//     () => {
//         setCapsLock();
//     },
//     "CapsLock"
// );
//
//
// let monitor = document.getElementById('kp')
// let text = []
//
//
// // digits 48-57
//
// const actions = {
//     tabAction: (e) => {
//         e.preventDefault();
//         text.push(`\&nbsp;\&nbsp;\&nbsp;\&nbsp;`);
//     },
//
//     capsAction: () => {
//
//     },
//     altAction: (e) => {
//         e.preventDefault();
//     },
//
//     typeAction: (e, charPosition) => {
//         let myElement = document.getElementById('kp');
//
//         myElement.focus()
//         let keyPress = e.key;
//         let keyCode = e.which || e.keyCode;
//         let char = getChar(data, keyCode);
//         let digit = null;
//         console.log(text)
//         if(keyCode >= 48 && keyCode <= 57 ){
//             (e.shiftKey) ? text.splice(charPosition, 0, char.spanTag) : text.splice(charPosition, 0, char.value);
//             // console.log(text)
//         }
//         if(settings.lang == 'en'){
//             (e.shiftKey || getCapsLock()) ? text.splice(charPosition, 0, char.value.toUpperCase()) : text.splice(charPosition, 0, char.value);
//             console.log(text)
//         }else {
//             (e.shiftKey || getCapsLock()) ? text.splice(charPosition, 0, char.value.toUpperCase()) : text.splice(charPosition, 0, char.value);
//             console.log(text)
//         }
//
//// const getCharFirstPosition = () => {
// //     let myElement = document.getElementById('kp');
// //     let startPosition = myElement.selectionStart;
// //     let endPosition = myElement.selectionEnd;
// //
// //     // Check if you've selected text
// //     if(startPosition == endPosition){
// //         alert("The position of the cursor is (" + startPosition + "/" + myElement.value.length + ")");
// //     }else{
// //         alert("Selected text from ("+ startPosition +" to "+ endPosition + " of " + myElement.value.length + ")");
// //     }
// // };
//
//     },
//
//     shiftAction: () => {
//
//     },
//
//     backAction: () => {
//
//     }
//
// };
//
// document.addEventListener('keydown', function(e) {
// console.log(getCharPosition())
//    // e.preventDefault()
//     let keyPress = e.key;
//     let keyCode = e.which || e.keyCode;
//     let elem = document.getElementById(keyCode.toString());
//     elem.classList.add('activate');
//     elem.classList.add('color');
//
//     switch (keyCode) {
//         case 9:
//             actions.tabAction(e);
//             screen.updateScreen(text)
//             break;
//         case 18:
//             actions.altAction(e);
//             break;
//         default:
//            // actions.typeAction(e, getCharPosition());
//          // screen.updateScreen(text)
//     };
//
//
//
//
// });
//
// document.addEventListener('keyup', function(e) {
//     let keyCode = e.which || e.keyCode;
//     let elem = document.getElementById(keyCode.toString());
//
//     elem.classList.remove('activate');
//     elem.classList.remove('color');
//
// });
//
//
//
//



// document.addEventListener('keydown', function(e) {
//
//     e.preventDefault()
//     let keyPress = e.key;
//     let keyCode = e.which || e.keyCode;
//     monitor.innerHTML += keyPress
//         //text.push(keyPress)
// //screen.updateScreen(text)
//     let elem = document.getElementById(keyCode.toString())
//     elem.classList.add('activate')
//     elem.classList.add('color')
//
// });
//
// document.addEventListener('keyup', function(e) {
//     let keyCode = e.which || e.keyCode;
//     let elem = document.getElementById(keyCode.toString())
//
//     elem.classList.remove('activate')
//     elem.classList.remove('color')
//
// });


//TODO solve problems with Ctrl? Shift? Alt
//TODO solve problems with Tab sticking
