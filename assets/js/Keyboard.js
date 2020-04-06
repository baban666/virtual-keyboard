import {data} from "./key-codes.js";
import { Button } from './Button.js';

export class Keyboard {

    getRoot = (tagId = `root`) => {
        const rootContainer = document.getElementById(tagId);
        rootContainer.innerHTML = '';
        return rootContainer;
    };

    generateButtons = (data) => {
        let buttons = [];
        data.forEach(button => {
            buttons.push(new Button(button));
        });
        return buttons;
    };

    renderButtonsToDom = (rootTagId, isEnglishLang) => {
        let keyboardWrapper = this.getRoot(rootTagId);
        let mainContainer = document.createElement('div');
        let row = document.createElement('div');
        mainContainer.className = 'main-container';
        row.className = 'row';
        mainContainer.append(row);
        keyboardWrapper.append(mainContainer);
        this.generateButtons(data).forEach((button) => {
            row.append(button.generateButton(isEnglishLang))
        })
    }

}
