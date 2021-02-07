import { LitElement, css, html } from 'lit-element';

export class VideoTrackEditor extends LitElement {
    static get properties() {
        return {
            message: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                width: 100px;
                height: 100px;
                background-color: gainsboro;
            }
            .video-tracks {
                width: 100%;
                height: 250px;
                background-color: #fff;
                border: 1px solid #1a2b42;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'I am video tracks';
    }

    render() {
        return html` <div class="video-tracks">${this.message}</div> `;
    }
}
customElements.define('video-track-editor', VideoTrackEditor);
