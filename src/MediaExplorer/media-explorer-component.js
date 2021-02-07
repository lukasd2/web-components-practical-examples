import { LitElement, css, html } from 'lit-element';
import './MediaSearchFilters/SearchBar.js';
import './MediaSearchFilters/FilterTab.js';
import './Card/card-components.js';

export class MediaExplorerComponent extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            data: { attribute: Array },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                color: #1a2b42;
                margin: 0 auto;
                text-align: center;
                border: 1px solid #1a2b42;
                border-radius: 5px;

                padding: 15px;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'Hello world';
        this.mediaData = [
            {
                thumbnailUrl: 'https://picsum.photos/id/1/150/200',
                mediaTitle: 'ExampleTitle1',
                mediaDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis odit neque consequatur. Corporis qui excepturi maiores voluptatum ratione aliquam.',
            },
            {
                thumbnailUrl: 'https://picsum.photos/id/2/150/200',
                mediaTitle: 'ExampleTitle2',
                mediaDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis odit neque consequatur. Corporis qui excepturi maiores voluptatum ratione aliquam.',
            },
            {
                thumbnailUrl: 'https://picsum.photos/id/3/150/200',
                mediaTitle: 'ExampleTitle3',
                mediaDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis odit neque consequatur. Corporis qui excepturi maiores voluptatum ratione aliquam.',
            },
            {
                thumbnailUrl: 'https://picsum.photos/id/4/150/200',
                mediaTitle: 'ExampleTitle4',
                mediaDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis odit neque consequatur. Corporis qui excepturi maiores voluptatum ratione aliquam.',
            },
        ];
    }

    render() {
        return html`${this.message}
            <search-bar></search-bar>
            <filter-tab></filter-tab>
            <card-component .mediaData="${this.mediaData}"></card-component> `;
    }
}

customElements.define('media-explorer', MediaExplorerComponent);
