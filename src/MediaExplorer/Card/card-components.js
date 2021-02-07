import { LitElement, css, html } from 'lit-element';
import './CardElement.js';

export class CardComponent extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            mediaData: { type: Array },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
            }
            .card-element {
                overflow: hidden;
                cursor: pointer;
            }
            .card-element:hover {
                background-color: aliceblue;
            }
        `;
    }

    constructor() {
        super();
        this.message = 'I am card';
    }

    dragstartMediaHandler(ev) {
        ev.dataTransfer.setData('text/plain', ev.target.cardTitle);
    }

    render() {
        return html`${this.mediaData.map(
            media => html`
                <card-element 
                    @dragstart=${this.dragstartMediaHandler}
                    draggable="true"
                    .mediaThumbnailUrl=${media.thumbnailUrl} 
                    .cardTitle=${media.mediaTitle}
                    .cardDescription=${media.mediaDescription} 
                    class="card-element">
                </card-element>
                </div>
            `
        )}`;
    }
}

customElements.define('card-component', CardComponent);
