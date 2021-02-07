import { LitElement, css, html } from 'lit-element';

export class FilterTab extends LitElement {
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
                background-color: lightblue;
            }
            .filter-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: row;
            }
            .search-filter {
                flex: 1;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'I am filter';
    }

    render() {
        return html`${this.message}
            <div class="filter-container">
                <ul class="filter-list">
                    <li class="search-filter">1</li>
                    <li class="search-filter">2</li>
                    <li class="search-filter">3</li>
                </ul>
            </div> `;
    }
}
customElements.define('filter-tab', FilterTab);
