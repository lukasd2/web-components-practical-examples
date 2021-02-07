import { LitElement, css, html } from 'lit-element';
import './CardTitle.js';
import './CardDescription.js';

export class CardMetadata extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            cardTitle: { type: String },
            cardDescription: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'CardMetadata';
    }

    render() {
        return html`
            <card-title .cardTitle=${this.cardTitle}></card-title>
            <card-description
                .cardDescription=${this.cardDescription}
            ></card-description>
        `;
    }
}
customElements.define('card-metadata', CardMetadata);
