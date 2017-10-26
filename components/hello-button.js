import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export default class HelloButton extends PolymerElement {

    static get template() {
        return `<button>Hello, my name is [[name]].</button>`
    }

    constructor() {
        super();
        this.name = 'BUTTON';
    }

    static get properties() {
        name: {
            type: String
        }
    }
}
