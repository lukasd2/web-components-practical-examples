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
            .exampleVideo {
                margin-top: 100px;
            }
        `;
    }

    constructor() {
        super();
        this.VideoEditorTitle = 'This is your new video title';
    }

    playVideoOnCavas() {
        const canvas = this.shadowRoot.querySelector('canvas');
        const video = this.shadowRoot.querySelector('video');
        const fps = 60;
        const width = 480;
        const height = 540;
        let canvasInterval = null;
        // Just a test TODO
        function drawImage() {
            canvas
                .getContext('2d', { alpha: false })
                .drawImage(video, 0, 0, width, height);
        }

        canvasInterval = window.setInterval(() => {
            drawImage(video);
        }, 1000 / fps);
        video.onpause = function () {
            clearInterval(canvasInterval);
        };
        video.onended = function () {
            clearInterval(canvasInterval);
        };
        video.onplay = function () {
            clearInterval(canvasInterval);
            canvasInterval = window.setInterval(() => {
                drawImage(video);
            }, 1000 / fps);
        };
    }

    render() {
        return html`
            <h3 class="videoEditorTitle">${this.VideoEditorTitle}</h3>
            <canvas
                class="canvas"
                id="videoEditor"
                width="540"
                height="400"
            ></canvas>
            <video-track-editor class="videoTrackEditor"></video-track-editor>
            <div class="exampleVideo">
                <video
                    @play=${this.playVideoOnCavas}
                    id="video"
                    class="video"
                    autoplay="true"
                    src="ManBike.mp4"
                    type="video/mp4"
                    controls="true"
                    hidden
                ></video>
            </div>
        `;
    }
}
customElements.define('video-editor', VideoEditorComponent);
