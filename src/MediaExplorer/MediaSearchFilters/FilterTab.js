import { LitElement, css, html } from 'lit-element';

export class FilterTab extends LitElement {
    static get properties() {
        return {
            filters: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                height: 50px;
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
        this.filters = ['Video', 'Audio', 'Images'];
    }

    render() {
        return html` <div class="filter-container">
            <ul class="filter-list">
            ${this.filters.map(
                filter => html`
                <li class="search-filter">${filter}</li>
                </div>
            `
            )}
             </ul>
            </div>
        </div>`;
    }
}
customElements.define('filter-tab', FilterTab);
