import { LitElement, css, html } from 'lit-element';

export class CardDescription extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            cardDescription: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                font-size: 14px;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'CardDescription';
    }

    render() {
        return html`${this.cardDescription}`;
    }
}
customElements.define('card-description', CardDescription);
