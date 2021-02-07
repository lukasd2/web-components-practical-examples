import { LitElement, css, html } from 'lit-element';

export class SearchBar extends LitElement {
    static get properties() {
        return {
            message: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                height: 100px;
                background-color: gainsboro;
            }
            .search__what {
                margin-bottom: 25px;
                text-align: center;
                border-radius: 10px;
            }

            .search__search-btn {
                width: 150px;
                border-radius: 10px;
                background-color: #18a0fb;
                color: #fff;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'I am search';
    }

    render() {
        return html`${this.message}
            <input
                class="search__what input"
                type="text"
                name="mediasearch"
                placeholder="Cerca nella libreria"
                aria-label="Search"
            /> `;
    }
}
customElements.define('search-bar', SearchBar);
