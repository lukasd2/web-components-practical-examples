import { LitElement, css, html } from 'lit-element';
import { bulmaStyles } from '@granite-elements/granite-lit-bulma/granite-lit-bulma.js';

export class SearchBar extends LitElement {
    static get properties() {
        return {
            message: { type: String },
        };
    }

    static get styles() {
        return [
            bulmaStyles,
            css`
                :host {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    margin-bottom: 25px;
                }
                .search__media {
                    text-align: center;
                }
            `,
        ];
    }

    constructor() {
        super();
        this.message = 'This is a search Component';
    }

    render() {
        return html`
            <input
                class="search__media input"
                type="text"
                name="mediasearch"
                placeholder="Cerca nella libreria"
                aria-label="Search"
            />
        `;
    }
}
customElements.define('search-bar', SearchBar);
