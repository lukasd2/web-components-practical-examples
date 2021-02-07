import { LitElement, css, html } from 'lit-element';
import './VideoTrackEditor.js';

export class VideoEditorComponent extends LitElement {
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
                align-items: center;
                color: #1a2b42;
                text-align: center;
                border: 1px solid #1a2b42;
                border-radius: 5px;
            }
            #videoEditor {
                background-color: black;
                background-repeat: no-repeat;
            }
            .videoEditorTitle {
                font-size: 28px;
                padding: 25px 0;
            }
            .videoTrackEditor {
                width: 100%;

                margin-top: 25px;
            }
        `;
    }

    constructor() {
        super();
        this.VideoEditorTitle = 'This is your new video title';
    }

    render() {
        return html`
            <h3 class="videoEditorTitle">${this.VideoEditorTitle}</h3>
            <canvas id="videoEditor" width="540" height="400"></canvas>
            <video-track-editor class="videoTrackEditor"></video-track-editor>
        `;
    }
}
customElements.define('video-editor', VideoEditorComponent);
