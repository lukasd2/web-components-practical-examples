import { LitElement, css, html } from 'lit-element';
import { bulmaStyles } from '@granite-elements/granite-lit-bulma/granite-lit-bulma.js';

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
        return [
            bulmaStyles,
            css`
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
                    margin: 0 10px;
                }
                .card-button {
                    height: auto;
                    width: 150px;
                }
            `,
        ];
    }

    constructor() {
        super();
        this.message = 'Card Compon';
        this.showCardMetadata = true;
    }

    _handleClick() {
        const cardMetadata = this.shadowRoot.querySelector('card-metadata');
        const cardToggleDescriptionBtn = this.shadowRoot.getElementById(
            'cardToggleDescriptionBtn'
        );
        this.showCardMetadata = !this.showCardMetadata;
        if (this.showCardMetadata) {
            cardMetadata.style.visibility = 'visible';
            cardToggleDescriptionBtn.innerText = 'Hide Info';
        } else {
            cardMetadata.style.visibility = 'hidden';

            cardToggleDescriptionBtn.innerText = 'Show Info';
        }
    }

    render() {
        return html`
            <img
                src=${this.mediaThumbnailUrl}
                class="media-thumbnail"
                alt="Card Thumbnail"
            />
            <card-metadata
                class="card-metadata"
                ?disabled=${this.showCardMetadata}
                .cardTitle=${this.cardTitle}
                .cardDescription=${this.cardDescription}
            ></card-metadata>
            <button
                id="cardToggleDescriptionBtn"
                @click="${this._handleClick}"
                class="card-button button is-large"
            >
                Hide Content
            </button>
        `;
    }
}
customElements.define('card-element', CardElement);
