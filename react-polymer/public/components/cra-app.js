import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

const css = `
:host {
    text-align: center;
}
.logo {
    animation: logo-spin infinite 20s linear;
    height: 80px;
}
.header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
}
.title {
    font-size: 1.5em;
}
.intro {
    font-size: large;
}
@keyframes logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

export default class CraApp extends PolymerElement {

    static get template() {
        return `
            <style>${css}</style>
            <div>
                <header class="header">
                    <h1 class="title">Welcome to <s>React</s> Polymer</h1>
                    <img src="img/logo.svg" class="logo" alt="logo" />
                </header>
                <p class="intro">Rendering polymer element</p>
            </div>
        `
    }

    constructor() {
        super();
    }

    static get properties() {
    }
}
