import { LitElement, css, html } from 'lit-element';
import './CardMetatada.js';

export class CardElement extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            mediaThumbnailUrl: { type: String },
            cardTitle: { type: String },
            cardDescription: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: row;
                padding: 20px 0;
                border: 1px solid black;
                border-radius: 5px;
                margin: 5px 0;
            }
            .media-thumbnail {
                width: 75px;
                height: 100px;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'Card Compon';
    }

    render() {
        return html`
            <img
                src=${this.mediaThumbnailUrl}
                class="media-thumbnail"
                alt="Card Thumbnail"
            />
            <card-metadata
                .cardTitle=${this.cardTitle}
                .cardDescription=${this.cardDescription}
            ></card-metadata>
            <button class="media-button">Hide Content</button>
        `;
    }
}
customElements.define('card-element', CardElement);
