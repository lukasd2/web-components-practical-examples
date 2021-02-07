import { LitElement, css, html } from 'lit-element';

export class CardTitle extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            cardTitle: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                font-size: 16px;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'CardTitle';
    }

    render() {
        return html`${this.cardTitle}`;
    }
}
customElements.define('card-title', CardTitle);
