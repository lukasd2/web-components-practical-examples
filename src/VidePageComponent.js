import { LitElement, html, css } from 'lit-element';
import './MediaExplorer/media-explorer-component.js';
import './VideoEditor/video-editor-component.js';

export class VideoPageComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            subTitle: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                font-size: 1.286rem;
                color: #1a2b42;
                padding: 0;
                margin: 0;
                overflow: hidden;
                text-align: center;
            }
            .page-header {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                text-align: center;
                margin: 25px 0;
            }

            .page-header .page-title {
                grid-column: 1/5;
                font-size: 2em;
            }
            .page-header .page-subtitle {
                width: 50%;
                grid-column: 1/5;
                justify-self: center;
            }

            main {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                grid-gap: 20px;
            }

            .media-explorer {
                grid-column: 7/12;
                width: 100%;
            }
            .video-editor {
                grid-column: 2/7;
                width: 100%;
            }
        `;
    }

    constructor() {
        super();
        this.title = 'Online video editor';
        this.subTitle =
            'Create, edit and share videos directly from the browser!';
    }

    render() {
        return html`
            <header class="page-header">
                <h1 class="page-title">${this.title}</h1>
                <h2 class="page-subtitle">${this.subTitle}</h2>
            </header>
            <main>
                <video-editor class="video-editor"></video-editor>
                <media-explorer class="media-explorer"></media-explorer>
            </main>
        `;
    }
}
