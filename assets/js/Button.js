export class Button {

    constructor({  keyCod, spanTag, spanTagRu, className, value, valueRu, ...rest }) {
        this.keyCod = keyCod;
        this.spanTag = spanTag;
        this.className = className;
        this.value = value;
        this.valueRu = valueRu;
        this.spanTagRu = spanTagRu;
    }

    // Button generator
    generateButton(isEnglishLang = 'en') {
        let template = `<span>${(isEnglishLang === 'en') ? this.spanTag : (this.spanTagRu === null) ? '' : this.spanTagRu || this.spanTag }</span> 
        ${(isEnglishLang === 'en') ? this.value : (this.valueRu) ? this.valueRu : this.value}`;
        let button = document.createElement('div');
        button.setAttribute('id', this.keyCod);
        button.className = this.className;
        button.setAttribute('data-id', this.keyCod);
        button.innerHTML = template;
        return button;
    }
}
