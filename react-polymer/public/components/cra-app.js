import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

const css = `
.App {
    text-align: center;
}
.App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
}
.App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
}
.App-title {
    font-size: 1.5em;
}
.App-intro {
    font-size: large;
}
@keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

export default class CraApp extends PolymerElement {

    static get template() {
        return `
            <style>${css}</style>
            <div class="App">
                <header class="App-header">
                    <h1 class="App-title">Welcome to React</h1>
                </header>
                <p class="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        `
    }

    constructor() {
        super();
    }

    static get properties() {
    }
}
